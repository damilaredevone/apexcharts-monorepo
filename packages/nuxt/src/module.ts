import {
  addComponent,
  createResolver,
  defineNuxtModule,
  findPath,
  isNuxt2,
} from '@nuxt/kit'
import ApexChartsVue from '@damilaredev/apexcharts-vue'
import type { Arrayable } from 'vitest'
import { version, name } from '../package.json'

export default defineNuxtModule({
  meta: {
    name,
    version,
    configKey: 'apexcharts-nuxt',
    compatibility: {
      nuxt: '>=3.0.0',
      bridge: true,
    },
  },
  async setup(moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const configPaths: Array<string> = []

    const addConfigPath = async (path: Arrayable<string>) => {
      // filter in case an empty path is provided
      const paths = (Array.isArray(path) ? path : [path]).filter(Boolean)
      for (const path of paths) {
        const resolvedPath = await findPath(
          path,
          { extensions: ['.js', '.cjs', '.mjs', '.ts'] },
          'file',
        )
        // only if the path is found
        if (resolvedPath) {
          configPaths.push(resolvedPath)
        }
      }
    }

    addComponent({
      name: 'ApexChartsVue', // name of the component to be used in vue templates
      export: 'ApexChartsVue', // (optional) if the component is a named (rather than default) export
      // filePath should be package name or resolved path
      // if the component is created locally, preferably in `runtime` dir
      filePath: '@damilaredev/apexcharts-vue', // resolve(runtimeDir, 'components', 'MyComponent.vue')
    })
  },
})
