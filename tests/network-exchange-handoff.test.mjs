import test from 'node:test'
import assert from 'node:assert/strict'
import { prepareExchange, validateExchange, exchangeRecipient } from '../lib/network-exchange-handoff.ts'
const base = { name: 'Test Visitor', email: 'visitor@example.com', phone: '', context: '' }
test('recipient is fixed and email/body encoding round trips Unicode and URL syntax', () => {
 const draft = { ...base, name: 'Zoë & 李', context: 'Room #2? A+B & café\nNext line' }
 const result = prepareExchange(draft)
 const url = new URL(result.href)
 assert.equal(url.protocol, 'mailto:'); assert.equal(url.pathname, exchangeRecipient)
 assert.equal(url.searchParams.get('subject'), 'Great connecting — Gary Mariner')
 assert.match(url.searchParams.get('body'), /Zoë & 李/)
 assert.match(url.searchParams.get('body'), /Room #2\? A\+B & café\r\nNext line/)
 assert.deepEqual([...url.searchParams.keys()], ['subject', 'body'])
})
test('required fields and malformed email are rejected without a mailto', () => {
 for (const draft of [{...base,name:''},{...base,email:''},{...base,email:'x@example.com\nBcc: victim@example.com'},{...base,email:'a..b@example.com'}]) {
  const r=prepareExchange(draft); assert.ok(Object.keys(r.errors).length);assert.equal(r.href,undefined)
 }
})
test('bounded fields and unsupported controls fail locally', () => {
 for (const [key,value] of [['name','x'.repeat(121)],['phone','12345'.repeat(9)],['context','x'.repeat(601)],['name','A\u0000B'],['context','\ud800']]) {
  assert.ok(validateExchange({...base,[key]:value}).errors[key])
 }
})
test('optional fields omitted cleanly and no visitor email is added to headers', () => {
 const r=prepareExchange(base); const url=new URL(r.href)
 assert.equal(url.searchParams.has('cc'),false);assert.equal(url.searchParams.has('bcc'),false)
 assert.doesNotMatch(r.details,/Phone:|context:/)
})
test('valid phone and multiline context preserved as plain text', () => {
 const r=prepareExchange({...base,phone:'+1 (404) 555-0123',context:'<b>hello</b>\rSecond line'})
 assert.match(r.details,/Phone: \+1 \(404\) 555-0123/);assert.match(r.details,/<b>hello<\/b>\r\nSecond line/)
})
test('long encoded messages retain copy text but suppress unreliable mailto', () => {
 const r=prepareExchange({...base,context:'李'.repeat(300)})
 assert.equal(r.href,undefined);assert.match(r.details,/李/);assert.deepEqual(r.errors,{})
})
test('validation does not mutate the in-memory draft', () => {
 const draft={...base,name:'  Test Visitor  '};validateExchange(draft);assert.equal(draft.name,'  Test Visitor  ')
})
