import { builtinModules } from 'module'
import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig({
  entry: ['./src/module.ts'],
  format: ['cjs', 'esm'],
  target: 'node14',
  outDir: 'dist',
  clean: true,
  sourcemap: true,
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
