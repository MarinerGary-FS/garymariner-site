'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { garyContact } from '@/lib/vcard'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const subject = encodeURIComponent(`Alignment inquiry from ${form.name}`)
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company / Organization: ${form.company || 'Not provided'}`,
        '',
        form.message,
      ].join('\n')
    )

    window.location.href = `mailto:${garyContact.primaryEmail}?subject=${subject}&body=${body}`
    setStatus('success')
    setForm({ name: '', email: '', company: '', message: '' })
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col gap-3 p-5 md:p-6 rounded-lg border border-gold/25 bg-surface">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-gold/60" />
            <span className="text-xs font-sans text-gold uppercase tracking-[0.18em]">
              Message prepared
            </span>
          </div>
          <h3 className="font-display font-bold text-display-md text-white">
            Your message is ready.
          </h3>
          <p className="font-sans text-sm text-white/55 leading-[1.85]">
            Your email client should open with the context filled in. If it does not, email
            {` ${garyContact.primaryEmail} `}directly.
          </p>
          <div className="mt-2">
            <Button href="https://cal.com/garymariner" size="sm" external>
              Begin a conversation
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Full Name"
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Company */}
      <Field
        label="Company / Organization"
        name="company"
        type="text"
        placeholder="Optional"
        value={form.company}
        onChange={handleChange}
      />

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-sans text-white/40 uppercase tracking-[0.14em]">
          Message <span className="text-white/20">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe the system, workflow, or execution gap you are trying to solve."
          required
          rows={5}
          className="w-full bg-surface border border-border rounded-lg px-4 py-3.5 font-sans text-sm text-white/80 placeholder:text-white/20 leading-[1.7] focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors duration-200 resize-none"
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <Button
          type="submit"
          size="md"
          disabled={status === 'submitting'}
          className={status === 'submitting' ? 'opacity-60 pointer-events-none' : ''}
        >
          {status === 'submitting' ? 'Preparing...' : 'Explore alignment'}
        </Button>

        {status === 'error' && (
          <p className="text-xs font-sans text-red-400/80">
            Something went wrong. Please try again or email directly.
          </p>
        )}
      </div>
    </form>
  )
}

interface FieldProps {
  label: string
  name: string
  type: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

function Field({ label, name, type, placeholder, value, onChange, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-sans text-white/40 uppercase tracking-[0.14em]">
        {label}
        {required && <span className="text-white/20 ml-1">(required)</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-surface border border-border rounded-lg px-4 py-3.5 min-h-[48px] font-sans text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors duration-200"
      />
    </div>
  )
}
