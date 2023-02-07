import { defineNuxtModule, isNuxt2 } from '@nuxt/kit'
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
  async setup(moduleOptions, nuxt) {},
})
