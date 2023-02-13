# ApexCharts Vue

## Setup

Compatible with Vue >=3
Apexcharts is required to be installed in your project.

```bash
# yarn
yarn install apexcharts @damilaredev/apexcharts-vue

# npm
npm i apexcharts @damilaredev/apexcharts-vue

# pnpm
pnpm i apexcharts @damilaredev/apexcharts-vue
```

## Usage

```ts
import { createApp } from 'vue'
import ApexChartsVue from '@damilaredev/apexcharts-vue'
import App from './App.vue'

createApp(App).use(ApexChartsVue).mount('#app')
```

## Props

```ts
type Props = {
  /**
   * Graph type prop
   *
   * @default 'line'
   *
   * @property
   * @name type
   * @type {string | undefined}
   */
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick'
    | 'boxPlot'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | 'rangeArea'
    | 'treemap'

  /**
   * Graph config options
   *
   * @default '100%'
   *
   * @property
   * @name options
   * @type {ApexOptions | undefined}
   */
  options?: ApexOptions

  /**
   * Graph data prop
   *
   * @default '[]'
   *
   * @property
   * @name series
   * @type {ApexAxisChartSeries | ApexNonAxisChartSeries | undefined}
   */
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries

  /**
   * Graph width
   *
   * @default '100%'
   *
   * @property
   * @name width
   * @type {string | number | undefined}
   */
  width?: string | number

  /**
   * Graph height
   *
   * @default '100%'
   *
   * @property
   * @name height
   * @type {string | number | undefined}
   */
  height?: string | number
}
```

## Example

Check out the [GitHub example repo](https://github.com/damilaredevone/apexcharts-monorepo/tree/main/examples/apexchart-vue) for sample usage.
