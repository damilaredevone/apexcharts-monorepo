<script setup lang="ts">
import { computed } from 'vue'

const getRandomInt = (): number => Math.floor(Math.random() * (50 - 5 + 1)) + 5

const graphOpts = computed(() => {
  return {
    chart: {
      type: 'line',
      stacked: false,
      fontFamily: 'inherit',
      height: 350,
      zoom: {
        type: 'x',
        enabled: false,
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
        // autoSelected: 'zoom',
      },
      dropShadow: {
        enabled: true,
        color: '#253CAC',
        top: 10,
        left: 7,
        blur: 5,
        opacity: 0.1,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 900,
        animateGradually: {
          enabled: true,
          delay: 200,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: 'straight',
      colors: ['#253CAC'],
    },
    grid: {
      show: false,
      borderColor: '#253CAC',
      // row: {
      //   // colors: ['#f3f3f3', 'transparent'],
      //   opacity: 1,
      // },
    },
    markers: {
      size: 0,
      colors: ['#253CAC'],
      radius: 4,
      shape: 'circle',
      strokeWidth: 2,
    },
    fill: {
      type: 'gradient',
      colors: ['#253CAC'],
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    noData: {},
    yaxis: {
      show: false,
      labels: {
        formatter: function (val: any) {
          return `${val}%`
        },
      },
    },
    xaxis: {
      type: 'category',
      // range: 2,
      labels: {
        show: false,
        trim: true,
        hideOverlappingLabels: true,
        style: {
          fontSize: 13,
          fontWeight: 500,
          cssClass: 'font-sans font-medium',
        },
      },
      categories: [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      intersect: false,
      shared: false,
      enabled: true,
      theme: 'light',
      style: {
        fontSize: '13px',
      },
      items: {
        display: 'flex',
      },
      x: {
        show: true,
      },
      marker: {
        show: true,
        fillColors: ['#24366B', '#E8F0FE'],
      },
    },
  }
})
</script>

<template>
  <div>
    <apex-charts-vue
      type="area"
      height="250"
      :options="graphOpts"
      :series="[
        {
          data: [
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
            getRandomInt(),
          ],
        },
      ]"
    />
  </div>
</template>
