import type { PropType, SetupContext } from 'vue'
import {
  toRef,
  defineComponent,
  getCurrentInstance,
  h,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  ref,
  toRefs,
  watch,
} from 'vue'
import type { ApexOptions } from 'apexcharts'
import ApexCharts from 'apexcharts'
import { extend } from './utils'

const events = [
  'animationEnd',
  'beforeMount',
  'mounted',
  'updated',
  'click',
  'mouseMove',
  'mouseLeave',
  'xAxisLabelClick',
  'legendClick',
  'markerClick',
  'selection',
  'dataPointSelection',
  'dataPointMouseEnter',
  'dataPointMouseLeave',
  'beforeZoom',
  'beforeResetZoom',
  'zoomed',
  'scrolled',
  'scrolled',
]

const ApexChartsVue = defineComponent({
  name: 'ApexChart',
  props: {
    options: {
      type: Object as PropType<ApexOptions>,
      default: () => ({}),
    },
    type: {
      type: String as PropType<Pick<ApexChart, 'type'>>,
      default: 'line',
    },
    series: {
      type: Array as PropType<ApexAxisChartSeries | ApexNonAxisChartSeries>,
      required: false,
      default: () => [],
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
    height: {
      type: [String, Number],
      default: 'auto',
    },
    className: {
      type: String,
      default: '',
    },
  },

  emits: events,

  setup(props, { emit }: SetupContext) {
    const __el = ref<Element | null>(null)
    const chart = ref<ApexCharts>({} as ApexCharts)

    const newSeries = toRef(props, 'series')

    const initialize = async (): Promise<void> => {
      await nextTick()

      const newOptions = {
        chart: {
          ...(props?.options?.chart || {}),
          type: props.type || props.options?.chart?.type || 'line',
          height: props.height,
          width: props.width,
          events: {} as any,
        },
        series: props?.options?.series ?? newSeries.value,
      }

      events.forEach((event: string) => {
        const callback = (...args: any) => emit(event, ...args)

        newOptions.chart.events[event] = callback
      })

      const config = extend(props.options, newOptions)
      chart.value = new ApexCharts(__el.value, config)

      return chart.value.render()
    }

    const refresh = (): Promise<void> => {
      destroy()
      return initialize()
    }

    const destroy = (): void => {
      chart.value.destroy()
    }

    const updateSeries = (newSeries: any, animate: any): Promise<void> => {
      return chart.value.updateSeries(newSeries, animate)
    }

    const updateOptions = (
      newOptions: any,
      redrawPaths?: boolean,
      animate?: boolean,
      updateSyncedCharts?: boolean,
    ): Promise<void> => {
      return chart.value.updateOptions(
        newOptions,
        redrawPaths,
        animate,
        updateSyncedCharts,
      )
    }

    const toggleSeries = (seriesName: string): any => {
      return chart.value.toggleSeries(seriesName)
    }

    const showSeries = (seriesName: string): void => {
      chart.value.showSeries(seriesName)
    }

    const hideSeries = (seriesName: string): void => {
      chart.value.hideSeries(seriesName)
    }

    const appendSeries = (
      newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries,
      animate: any,
    ): Promise<void> => {
      return chart.value.appendSeries(newSeries, animate)
    }

    const resetSeries = (): void => {
      chart.value.resetSeries()
    }

    const toggleDataPointSelection = (
      seriesIndex: number,
      dataPointIndex?: number,
    ) => {
      chart.value.toggleDataPointSelection(seriesIndex, dataPointIndex)
    }

    const appendData = (newData: any): void => {
      chart.value.appendData(newData)
    }

    const zoomX = (start: number, end: number): void => {
      chart.value.zoomX(start, end)
    }

    const dataURI = (options?: {
      scale?: number
      width?: number
    }): Promise<
      | {
          imgURI: string
        }
      | {
          blob: Blob
        }
    > => {
      return chart.value.dataURI(options)
    }

    const addXaxisAnnotation = (options: any, pushToMemory?: boolean): void => {
      chart.value.addXaxisAnnotation(options, pushToMemory)
    }

    const addYaxisAnnotation = (options: any, pushToMemory?: boolean): void => {
      chart.value.addYaxisAnnotation(options, pushToMemory)
    }

    const addPointAnnotation = (options: any, pushToMemory?: boolean): void => {
      chart.value.addPointAnnotation(options, pushToMemory)
    }

    const removeAnnotation = (id: string, options?: any): void => {
      chart.value.removeAnnotation(id, options)
    }

    const clearAnnotations = (): void => {
      chart.value.clearAnnotations()
    }

    onBeforeMount(() => {
      ;(window as any).ApexCharts = ApexCharts
    })

    onMounted(() => {
      __el.value = getCurrentInstance()?.proxy!.$el
      initialize()
    })

    onBeforeUnmount(() => {
      if (!chart.value) {
        return
      }
      destroy()
    })

    const reactiveProps = toRefs(props)

    watch(reactiveProps.options, () => {
      if (!chart.value && props.options) {
        initialize()
      } else {
        chart.value.updateOptions(props.options)
      }
    })

    watch(
      reactiveProps.series,
      () => {
        if (!chart.value && props.series) {
          initialize()
        } else {
          chart.value.updateSeries(
            props.series as ApexAxisChartSeries | ApexNonAxisChartSeries,
          )
        }
      },
      { deep: true },
    )

    watch([reactiveProps.type, reactiveProps.width, reactiveProps.height], () => {
      refresh()
    })

    return {
      chart,
      initialize,
      refresh,
      destroy,
      updateOptions,
      updateSeries,
      toggleSeries,
      showSeries,
      hideSeries,
      resetSeries,
      zoomX,
      toggleDataPointSelection,
      appendData,
      appendSeries,
      addXaxisAnnotation,
      addYaxisAnnotation,
      addPointAnnotation,
      removeAnnotation,
      clearAnnotations,
      dataURI,
    }
  },

  render() {
    return h('div', {
      class: 'apexcharts-vue',
      keepAlive: true,
      slot: 'default',
    })
  },
})

export default ApexChartsVue
