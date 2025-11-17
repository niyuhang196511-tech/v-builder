<script setup lang="ts">
import type { ViewBlockItem } from '@/types/block'

interface IProps {
    block: ViewBlockItem
}

defineProps<IProps>()
</script>
<template>
    <div class="view-block">View Block</div>
</template>
<style lang="scss" scoped>
.view-block {
    width: 100%;
}
</style>
