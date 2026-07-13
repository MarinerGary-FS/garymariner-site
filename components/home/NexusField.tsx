import { cn } from '@/lib/utils'

interface NexusFieldProps {
  className?: string
}

const nodes = [
  { id: 'vision', label: 'Vision', x: 120, y: 92 },
  { id: 'people', label: 'People', x: 120, y: 308 },
  { id: 'systems', label: 'Systems', x: 480, y: 92 },
  { id: 'execution', label: 'Execution', x: 480, y: 308 },
] as const

export function NexusField({ className }: NexusFieldProps) {
  return (
    <figure className={cn('relative', className)}>
      <svg
        role="img"
        aria-labelledby="nexus-field-title nexus-field-description"
        viewBox="0 0 600 400"
        className="nexus-field h-auto w-full"
      >
        <title id="nexus-field-title">Nexus Field: relationships behind intelligent execution</title>
        <desc id="nexus-field-description">
          Executive vision, people, systems, and execution converge through judgment and translation.
        </desc>
        <defs>
          <linearGradient id="nexus-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgb(68 120 255)" stopOpacity="0.22" />
            <stop offset="0.5" stopColor="rgb(219 228 239)" stopOpacity="0.72" />
            <stop offset="1" stopColor="rgb(92 225 230)" stopOpacity="0.28" />
          </linearGradient>
          <radialGradient id="nexus-core">
            <stop offset="0" stopColor="rgb(245 247 250)" stopOpacity="0.92" />
            <stop offset="0.35" stopColor="rgb(92 225 230)" stopOpacity="0.42" />
            <stop offset="1" stopColor="rgb(68 120 255)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="nexus-field__connections" fill="none" stroke="url(#nexus-line)" strokeWidth="1.25">
          {nodes.map((node) => (
            <path key={node.id} d={`M ${node.x} ${node.y} Q 300 200 300 200`} />
          ))}
          <path d="M120 92 L480 308" opacity="0.3" />
          <path d="M480 92 L120 308" opacity="0.3" />
        </g>

        <circle cx="300" cy="200" r="82" fill="url(#nexus-core)" opacity="0.5" />
        <circle cx="300" cy="200" r="42" fill="rgb(11 15 21 / 0.9)" stroke="rgb(92 225 230 / 0.5)" />
        <circle className="nexus-field__pulse" cx="300" cy="200" r="52" fill="none" stroke="rgb(92 225 230 / 0.24)" />
        <text x="300" y="196" textAnchor="middle" className="fill-white font-mono text-[12px] uppercase">
          Judgment
        </text>
        <text x="300" y="214" textAnchor="middle" className="fill-white/50 font-mono text-[8px] uppercase">
          Translation layer
        </text>

        {nodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="28" fill="rgb(17 23 33 / 0.94)" stroke="rgb(219 228 239 / 0.18)" />
            <circle cx={node.x} cy={node.y} r="3" fill="rgb(92 225 230)" />
            <text
              x={node.x}
              y={node.y + 46}
              textAnchor="middle"
              className="fill-white/70 font-mono text-[10px] uppercase"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="sr-only">
        Vision, people, systems, and execution are connected through judgment and translation.
      </figcaption>
    </figure>
  )
}
