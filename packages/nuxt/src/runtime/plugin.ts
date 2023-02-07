import ApexChartsVue from '@damilaredev/apexcharts-vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ApexChartsVue', ApexChartsVue)
})
