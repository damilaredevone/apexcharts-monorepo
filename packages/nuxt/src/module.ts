import { addComponent, createResolver, defineNuxtModule, isNuxt2 } from '@nuxt/kit'
import ApexChartsVue from '@damilaredev/apexcharts-vue'
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

    addComponent({
      name: 'ApexChartsVue', // name of the component to be used in vue templates
      export: 'ApexChartsVue', // (optional) if the component is a named (rather than default) export
      // filePath should be package name or resolved path
      // if the component is created locally, preferably in `runtime` dir
      filePath: '@damilaredev/apexcharts-vue', // resolve(runtimeDir, 'components', 'MyComponent.vue')
    })
  },
})
