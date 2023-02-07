import { defineConfig } from 'tsup'
import vuePlugin from 'rollup-plugin-vue'
import pkg from './package.json'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  target: 'node14',
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  dts: true,
  treeshake: true,
  platform: 'browser',
  external: [...Object.keys(pkg.peerDependencies || {})],
  // plugins: [vuePlugin({ target: 'browser' })],
  async onSuccess() {
    console.log('Done...')
  },
})
