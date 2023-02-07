import { defineNuxtConfig } from 'nuxt/config'
import module from '../src/module'

export default defineNuxtConfig({
  ssr: false,
  modules: [module],
})
