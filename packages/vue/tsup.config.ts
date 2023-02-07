import { builtinModules } from 'module'
import { defineConfig } from 'tsup'
import vuePlugin from 'rollup-plugin-vue'
import pkg from './package.json'

export default defineConfig({
  entry: ['./src/ApexCharts.ts'],
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
  // plugins: [vuePlugin({ target: 'browser' })],
  async onSuccess() {
    console.log('Done...')
  },
})
