import { defineConfig } from 'vitest/config'

// Evidence-only runner: transform the real TSX module without changing Next's tsconfig.
export default defineConfig({
  oxc: { jsx: { runtime: 'automatic' } },
  test: { include: ['audit-artifacts/network-exchange-001/signal-room-complete/implementation/network-sharing.check.ts'] },
})
