import {
  addComponent,
  addPlugin,
  createResolver,
  defineNuxtModule,
  findPath,
} from '@nuxt/kit'
import type { NuxtModule } from '@nuxt/schema'
import { version, name } from '../package.json'

export type Arrayable<T> = T | T[]
export type ModuleOptions = Record<string, any>

const config: NuxtModule<ModuleOptions> = defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'apexcharts-nuxt',
    compatibility: {
      nuxt: '>=3.0.0',
      bridge: true,
    },
  },
  defaults: (nuxt) => ({}),
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
      name: 'ApexCharts',
      export: 'ApexCharts',
      filePath: '@damilaredev/apexcharts-vue',
    })

    addPlugin(resolve('runtime/plugin.ts'))
  },
})

export default config
