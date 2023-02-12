import { builtinModules } from 'module'
import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'node14',
  outDir: 'dist',
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
  external: [
    ...builtinModules,
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
  async onSuccess() {
    console.log('Done...')
  },
})
