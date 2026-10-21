import { open, readdir, lstat, realpath } from 'node:fs/promises'
import { constants } from 'node:fs'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const approvedConfigHash = '90573cba8b138d62b51278731f8ef2c94ba6387afdbcb81f1ade6eb18e2145b4'
export const approvedPatterns = Object.freeze(['app', 'components', 'lib'].flatMap(root =>
  ['js', 'ts', 'jsx', 'tsx', 'mdx'].map(extension => `./${root}/**/*.${extension}`)))
export const inputLimits = Object.freeze({ fileBytes: 262144, totalBytes: 4194304, filePunctuation: 2048, totalPunctuation: 32768, delimiterDepth: 64, directoryDepth: 64, entries: 100000 })
const configurations = Object.freeze({
  'tailwind.config.ts': approvedConfigHash,
  'postcss.config.mjs': '8cd22d703ac0dc5a95abe6176251ede17d8220ad2be9521a74fe3c1689fc34c5',
  'next.config.ts': '28b7f00c1788640f7f1428e25391f66f652c823e89a6782793b0e11447041e75',
})
const sourceExtensions = new Set(['.js', '.ts', '.jsx', '.tsx', '.mdx'])
const textExtensions = new Set([...sourceExtensions, '.css'])
const binaryInputs = new Set(['app/apple-icon.png', 'app/icon.png'])
const unsafePath = /[{}*?\[\]!\\\u0000-\u001f]/
const digest = bytes => createHash('sha256').update(bytes).digest('hex')

function checkStat(stat, directory = false) {
  if (stat.isSymbolicLink()) throw new Error('Input symlink rejected')
  if (directory ? !stat.isDirectory() : !stat.isFile()) throw new Error('Unexpected input type rejected')
  if ((stat.mode & 0o022) !== 0) throw new Error('Group/world-writable input rejected')
  if (typeof process.getuid === 'function' && stat.uid !== process.getuid()) throw new Error('Input has a different owner')
}

// Conservative raw-input admission, not a CSS parser or a vulnerability patch.
export function inspectText(bytes) {
  if (bytes.length > inputLimits.fileBytes) throw new Error('Per-file byte limit exceeded')
  const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes)
  let punctuation = 0, depth = 0
  for (const character of text) {
    if (character === '.' || character === '#') punctuation++
    if ('{[('.includes(character)) {
      if (++depth > inputLimits.delimiterDepth) throw new Error('Raw delimiter depth limit exceeded')
    } else if ('}])'.includes(character)) depth = Math.max(0, depth - 1)
  }
  if (punctuation > inputLimits.filePunctuation) throw new Error('Per-file selector punctuation limit exceeded')
  return { bytes: bytes.length, punctuation }
}

export async function verifyBuildInputs(root, { expectedRoot = process.cwd() } = {}) {
  const requested = path.resolve(root), expected = path.resolve(expectedRoot)
  if (requested !== expected) throw new Error('Unexpected trusted source root rejected')
  if (unsafePath.test(requested)) throw new Error('Unexpected glob/watch path rejected')
  checkStat(await lstat(requested), true)
  const base = await realpath(requested)
  if (base !== requested) throw new Error('Symlink-traversing source root rejected')
  let count = 0, totalBytes = 0, totalPunctuation = 0
  const contentFiles = [], cssFiles = []
  async function checkedPath(candidate, directory) {
    const stat = await lstat(candidate)
    checkStat(stat, directory)
    const resolved = await realpath(candidate)
    const relative = path.relative(base, resolved)
    if (relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Out-of-root input rejected')
    return stat
  }
  async function readText(candidate) {
    const before = await checkedPath(candidate, false)
    if (before.size > inputLimits.fileBytes) throw new Error('Per-file byte limit exceeded before read')
    const handle = await open(candidate, constants.O_RDONLY | constants.O_NOFOLLOW)
    try {
      const opened = await handle.stat()
      checkStat(opened)
      if (opened.dev !== before.dev || opened.ino !== before.ino || opened.size !== before.size) throw new Error('Input changed before read')
      const buffer = Buffer.alloc(inputLimits.fileBytes + 1)
      let used = 0
      while (used < buffer.length) {
        const { bytesRead } = await handle.read(buffer, used, buffer.length - used, null)
        if (!bytesRead) break
        used += bytesRead
      }
      const bytes = buffer.subarray(0, used)
      const metric = inspectText(bytes)
      const after = await handle.stat()
      if (after.size !== before.size || after.mtimeMs !== before.mtimeMs || after.ctimeMs !== before.ctimeMs || used !== before.size) throw new Error('Input changed during read')
      totalBytes += metric.bytes; totalPunctuation += metric.punctuation
      if (totalBytes > inputLimits.totalBytes || totalPunctuation > inputLimits.totalPunctuation) throw new Error('Aggregate input limit exceeded')
      return bytes
    } finally { await handle.close() }
  }
  for (const [name, hash] of Object.entries(configurations)) {
    const config = await readText(path.join(base, name))
    if (digest(config) !== hash) throw new Error('Unreviewed compiler configuration rejected; do not execute it')
    if (name === 'tailwind.config.ts') {
      const entries = config.toString().match(/'\.\/(app|components|lib)\/\*\*\/\*\.[a-z]+'/g)?.map(value => value.slice(1, -1)) ?? []
      if (JSON.stringify(entries) !== JSON.stringify(approvedPatterns)) throw new Error('Content allowlist mismatch')
    }
  }
  async function inspect(candidate, depth = 0) {
    if (depth > inputLimits.directoryDepth || ++count > inputLimits.entries) throw new Error('Build-input resource bound exceeded')
    if (unsafePath.test(candidate)) throw new Error('Unexpected glob/watch path rejected')
    const stat = await lstat(candidate)
    await checkedPath(candidate, stat.isDirectory())
    if (stat.isDirectory()) {
      for (const entry of (await readdir(candidate)).sort()) await inspect(path.join(candidate, entry), depth + 1)
    } else {
      const relative = path.relative(base, candidate).split(path.sep).join('/')
      const extension = path.extname(candidate)
      if (textExtensions.has(extension)) {
        await readText(candidate)
        if (sourceExtensions.has(extension)) contentFiles.push(relative)
        else cssFiles.push(relative)
      } else if (!binaryInputs.has(relative)) throw new Error('Unapproved compiler/watch input rejected')
    }
  }
  for (const directory of ['app', 'components', 'lib']) await inspect(path.join(base, directory))
  return { filesAndDirectories: count, patterns: approvedPatterns.length, configHash: approvedConfigHash, totalBytes, totalPunctuation, contentFiles: contentFiles.sort(), cssFiles: cssFiles.sort(), inputSetHash: digest(JSON.stringify(contentFiles.sort())) }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { console.log(JSON.stringify({ status: 'PASS', ...await verifyBuildInputs(process.cwd()) })) }
  catch (error) { console.error(error.message); process.exitCode = 1 }
}
// Preflight cannot sandbox hostile owners, later writes, dependencies or direct CLI bypass.
// Build/watch still requires immutable trusted inputs and separate process/resource isolation.
