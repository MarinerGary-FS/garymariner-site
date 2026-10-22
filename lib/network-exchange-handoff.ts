export type ExchangeDraft = { name: string; email: string; phone: string; context: string }
export type ExchangeErrors = Partial<Record<keyof ExchangeDraft, string>>
export const emptyExchangeDraft: ExchangeDraft = { name: '', email: '', phone: '', context: '' }
export const exchangeRecipient = 'gary.mariner@gmail.com'
const limits = { name: 120, email: 254, phone: 40, context: 600 }

export function validateExchange(draft: ExchangeDraft): { value: ExchangeDraft; errors: ExchangeErrors } {
  const value = Object.fromEntries(Object.entries(draft).map(([key, text]) => [key, text.trim()])) as ExchangeDraft
  const errors: ExchangeErrors = {}
  for (const key of Object.keys(limits) as (keyof ExchangeDraft)[]) {
    if (value[key].length > limits[key]) errors[key] = `Use ${limits[key]} characters or fewer.`
    if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\uD800-\uDFFF]/u.test(value[key])) errors[key] = 'Remove unsupported control characters.'
    if (key !== 'context' && /[\r\n\t]/.test(value[key])) errors[key] = 'Use a single line.'
  }
  if (!value.name) errors.name = 'Enter your name.'
  if (!value.email) errors.email = 'Enter your email address.'
  else if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/.test(value.email)
    || value.email.split('@')[0].startsWith('.') || value.email.split('@')[0].endsWith('.') || value.email.split('@')[0].includes('..')) errors.email = 'Enter a valid email address.'
  if (value.phone && (!/^[+()0-9 .x-]+$/i.test(value.phone) || value.phone.replace(/\D/g, '').length < 5)) errors.phone = 'Enter a phone number, or leave this blank.'
  return { value, errors }
}

export function formatExchangeDetails(value: ExchangeDraft): string {
  return ["Hi Gary,", '', "It was good connecting. Here are my details:", '', `Name: ${value.name}`, `Email: ${value.email}`,
    ...(value.phone ? [`Phone: ${value.phone}`] : []), ...(value.context ? ['', 'Where we met / context:', value.context.replace(/\r\n?|\n/g, '\r\n')] : []), '', 'Shared personally via GaryMariner.com/network.'].join('\r\n')
}

export function prepareExchange(draft: ExchangeDraft) {
  const { value, errors } = validateExchange(draft)
  if (Object.keys(errors).length) return { errors }
  const details = formatExchangeDetails(value)
  const href = `mailto:${exchangeRecipient}?subject=${encodeURIComponent('Great connecting — Gary Mariner')}&body=${encodeURIComponent(details)}`
  // Mail handlers have different URL limits. Keep an explicit manual-copy route for longer messages.
  return { errors, details, href: href.length <= 1800 ? href : undefined }
}
