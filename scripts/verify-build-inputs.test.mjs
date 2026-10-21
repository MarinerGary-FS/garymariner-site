import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, copyFile, writeFile, symlink, chmod, rm, access, readFile, realpath, lstat } from 'node:fs/promises'
import path from 'node:path'
import { verifyBuildInputs, inspectText, inputLimits } from './verify-build-inputs.mjs'

const storage = process.env.GITHUB_ACTIONS === 'true'
  ? await (async () => {
      const supplied = process.env.RUNNER_TEMP
      if (!supplied || !path.isAbsolute(supplied)) throw new Error('Missing absolute RUNNER_TEMP')
      const canonical = await realpath(supplied)
      if (canonical !== supplied || !(await lstat(supplied)).isDirectory()) throw new Error('Untrusted RUNNER_TEMP')
      return canonical
    })()
  : '/Volumes/Garys External/Development'
const configNames = ['tailwind.config.ts', 'postcss.config.mjs', 'next.config.ts']
async function fixture(run) {
  await access(storage)
  const root = await mkdtemp(path.join(storage, 'founder-input-test-'))
  try {
    for (const directory of ['app', 'components', 'lib']) await mkdir(path.join(root, directory))
    for (const name of configNames) await copyFile(new URL(`../${name}`, import.meta.url), path.join(root, name))
    await run(root, () => verifyBuildInputs(root, { expectedRoot: root }))
  } finally { await rm(root, { recursive: true, force: true }) }
}
const put = (root, name, text) => writeFile(path.join(root, name), text)

test('reviewed inputs and ordinary nested CSS are accepted', () => fixture(async (r, verify) => {
  await put(r, 'app/page.tsx', 'trusted'); await put(r, 'app/globals.css', '.a { &:hover { color: red; } }')
  const result = await verify(); assert.equal(result.patterns, 15); assert.deepEqual(result.contentFiles, ['app/page.tsx']); assert.deepEqual(result.cssFiles, ['app/globals.css'])
}))
test('config drift is rejected before any parser handoff', () => fixture(async (r, verify) => {
  await put(r, 'tailwind.config.ts', "throw new Error('must never execute')")
  let parserEntered = false
  await assert.rejects(async () => { await verify(); parserEntered = true }, /Unreviewed/)
  assert.equal(parserEntered, false)
}))
for (const name of ['{'.repeat(70) + 'a' + '}'.repeat(70) + '.tsx', '[glob].tsx', 'watch?.tsx', 'star*.tsx']) {
  test(`unexpected glob/watch filename rejected: ${name.slice(0, 20)}`, () => fixture(async (r, verify) => {
    await put(r, `app/${name}`, 'not compiled'); await assert.rejects(verify(), /glob\/watch/)
  }))
}
test('external source symlink rejected', () => fixture(async (r, verify) => {
  await symlink(storage, path.join(r, 'lib/escape')); await assert.rejects(verify(), /symlink/)
}))
test('source root symlink rejected', () => fixture(async (r, verify) => {
  await rm(path.join(r, 'components'), { recursive: true }); await symlink(path.join(r, 'app'), path.join(r, 'components')); await assert.rejects(verify(), /symlink/)
}))
for (const name of configNames) {
  test(`configuration symlink rejected: ${name}`, () => fixture(async (r, verify) => {
    await copyFile(path.join(r, name), path.join(r, 'approved-copy')); await rm(path.join(r, name)); await symlink(path.join(r, 'approved-copy'), path.join(r, name)); await assert.rejects(verify(), /symlink/)
  }))
  test(`writable configuration rejected: ${name}`, () => fixture(async (r, verify) => {
    await chmod(path.join(r, name), 0o666); await assert.rejects(verify(), /writable/)
  }))
}
test('writable root rejected', () => fixture(async (r, verify) => {
  await chmod(r, 0o777); await assert.rejects(verify(), /writable/)
}))
test('writable source rejected', () => fixture(async (r, verify) => {
  await put(r, 'app/unsafe.tsx', 'trusted'); await chmod(path.join(r, 'app/unsafe.tsx'), 0o666); await assert.rejects(verify(), /writable/)
}))
test('unexpected trusted root rejected', () => fixture(async r => {
  await assert.rejects(verifyBuildInputs(r, { expectedRoot: storage }), /Unexpected trusted/)
}))
test('symlink project root rejected', () => fixture(async r => {
  const link = r + '-link'; try { await symlink(r, link); await assert.rejects(verifyBuildInputs(link, { expectedRoot: link }), /symlink/) } finally { await rm(link) }
}))
test('extra external glob/raw watch configuration rejected', () => fixture(async (r, verify) => {
  await put(r, 'tailwind.config.ts', "export default {content: [{raw:'x'}, '/tmp/**/*.tsx'],plugins:[]}"); await assert.rejects(verify(), /Unreviewed/)
}))
test('unknown compiler input extension rejected', () => fixture(async (r, verify) => {
  await put(r, 'app/untrusted.scss', '.a{}'); await assert.rejects(verify(), /Unapproved/)
}))
test('approved image is not parsed as selector text', () => fixture(async (r, verify) => {
  await put(r, 'app/icon.png', Buffer.alloc(inputLimits.fileBytes + 1, 0xff)); await verify()
}))
test('byte limit accepts exact boundary and rejects plus one; UTF8 counted as bytes', () => {
  assert.equal(inspectText(Buffer.alloc(inputLimits.fileBytes, 120)).bytes, inputLimits.fileBytes)
  assert.throws(() => inspectText(Buffer.alloc(inputLimits.fileBytes + 1)), /byte limit/)
  assert.equal(inspectText(Buffer.from('é'.repeat(inputLimits.fileBytes / 2))).bytes, inputLimits.fileBytes)
  assert.throws(() => inspectText(Buffer.from('é'.repeat(inputLimits.fileBytes / 2 + 1))), /byte limit/)
})
test('invalid UTF8 fails closed', () => assert.throws(() => inspectText(Buffer.from([255])), /encoded data/))
test('punctuation exact boundary and adversarial flat, escaped, attribute and multiline selectors', () => {
  assert.equal(inspectText(Buffer.from('.a'.repeat(inputLimits.filePunctuation))).punctuation, inputLimits.filePunctuation)
  for (const payload of ['.a', '.\\61', '[data-x=".#"]\n']) assert.throws(() => inspectText(Buffer.from(payload.repeat(inputLimits.filePunctuation + 1))), /punctuation/)
})
test('nested raw delimiters rejected before selector parsing', () => {
  inspectText(Buffer.from('('.repeat(64) + ')'.repeat(64)))
  assert.throws(() => inspectText(Buffer.from(':not('.repeat(65))), /delimiter depth/)
})
test('oversized sparse file rejected before vulnerable parser handoff', () => fixture(async (r, verify) => {
  await put(r, 'app/global.css', 'x'.repeat(inputLimits.fileBytes + 1)); let parserEntered = false
  await assert.rejects(async () => { await verify(); parserEntered = true }, /before read/); assert.equal(parserEntered, false)
}))
test('aggregate byte exact boundary and plus one', () => fixture(async (r, verify) => {
  let remaining = inputLimits.totalBytes
  for (const name of configNames) remaining -= (await readFile(path.join(r, name))).length
  let i = 0
  while (remaining) { const size = Math.min(remaining, inputLimits.fileBytes); await put(r, `app/input${i++}.tsx`, 'x'.repeat(size)); remaining -= size }
  assert.equal((await verify()).totalBytes, inputLimits.totalBytes)
  await put(r, 'app/overflow.tsx', 'x'); await assert.rejects(verify(), /Aggregate/)
}))
test('aggregate punctuation exact boundary and plus one', () => fixture(async (r, verify) => {
  let remaining = inputLimits.totalPunctuation
  for (const name of configNames) remaining -= inspectText(await readFile(path.join(r, name))).punctuation
  let i = 0
  while (remaining) { const size = Math.min(remaining, inputLimits.filePunctuation); await put(r, `app/input${i++}.tsx`, '.'.repeat(size)); remaining -= size }
  assert.equal((await verify()).totalPunctuation, inputLimits.totalPunctuation)
  await put(r, 'app/overflow.tsx', '.'); await assert.rejects(verify(), /Aggregate/)
}))
test('directory structural depth rejected', () => fixture(async (r, verify) => {
  let current = path.join(r, 'app'); for (let i = 0; i < 65; i++) { current = path.join(current, 'd'); await mkdir(current) }
  await assert.rejects(verify(), /resource bound/)
}))
