import { mediaPreviews } from '@/lib/media-config'

export function ExecutiveMediaPreview() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {mediaPreviews.map((item) => (
        <article
          key={item.title}
          className="border-t border-white/12 pt-5"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-white/36">{item.format}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-[#F3F1EC]">{item.title}</h3>
          <p className="mt-4 text-sm leading-6 text-white/58">{item.description}</p>
          <p className="mt-4 text-sm leading-6 text-[#9EE7F4]/78">{item.signal}</p>
        </article>
      ))}
    </div>
  )
}
