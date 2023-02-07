import ApexChartsVue from '@damilaredev/apexcharts-vue'

// @ts-expect-error need to include type definitions
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Message', ApexChartsVue)
})
