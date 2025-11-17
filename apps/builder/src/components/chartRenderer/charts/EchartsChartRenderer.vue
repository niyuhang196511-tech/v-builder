<script setup lang="ts">
import type { ChartBlockItem } from '@/types/block'
import { reactive } from 'vue'
import VChart from 'vue-echarts'
import { PieChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import type { ECBasicOption } from 'echarts/types/dist/shared'

interface IProps {
    block: ChartBlockItem
}

defineProps<IProps>()

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent, ToolboxComponent])

const options = reactive<ECBasicOption>({
    title: {
        text: 'Traffic Sources',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
    },
    series: [
        {
            name: 'Traffic Sources',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 234, name: 'Ad Networks' },
                { value: 135, name: 'Video Ads' },
                { value: 1548, name: 'Search Engines' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
})
</script>
<template>
    <VChart class="chart-container" :option="options" autoresize></VChart>
</template>
<style lang="scss" scoped>
.chart-container {
    width: 100%;
    height: 400px;
}
</style>
