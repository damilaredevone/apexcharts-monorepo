import type { App } from 'vue'
import ApexChartsComponent from './components/ApexCharts'

const ApexChartsVue = {
  install: (app: App): void => {
    app.component('ApexCharts', ApexChartsComponent)
  },
}

export default ApexChartsVue
