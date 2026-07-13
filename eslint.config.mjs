import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({ baseDirectory: projectRoot })

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['.next/**', 'next-env.d.ts', 'audit-artifacts/**', 'coverage/**'],
  },
]

export default config
