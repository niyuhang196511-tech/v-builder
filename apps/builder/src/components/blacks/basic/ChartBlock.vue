<script setup lang="ts">
import type { ChartBlockItem } from '@/types/block'

interface IProps {
    block: ChartBlockItem
}

defineProps<IProps>()
</script>
<template>
    <div class="chart-block">Chart Block</div>
</template>
<style lang="scss" scoped>
.chart-block {
    width: 100%;
}
</style>
