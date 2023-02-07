import { defineConfig } from 'tsup'
import vuePlugin from 'rollup-plugin-vue'
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
  external: [...Object.keys(pkg.peerDependencies || {})],
  // plugins: [vuePlugin({ target: 'browser' })],
  async onSuccess() {
    console.log('Done...')
  },
})
