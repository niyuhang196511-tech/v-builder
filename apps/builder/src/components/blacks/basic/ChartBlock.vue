<script setup lang="ts">
import type { ChartBlockItem } from '@/types/block'
import ChartRenderer from '@/components/chartRenderer/ChartRenderer.vue'

interface IProps {
    block: ChartBlockItem
}

defineProps<IProps>()
</script>
<template>
    <div class="chart-block">
        <ChartRenderer :block="block" />
    </div>
</template>
<style lang="scss" scoped>
.chart-block {
    width: 100%;
}
</style>
