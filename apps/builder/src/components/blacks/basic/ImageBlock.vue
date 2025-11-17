<script setup lang="ts">
import type { ImageBlockItem } from '@/types/block'

interface IProps {
    block: ImageBlockItem
}

defineProps<IProps>()
</script>
<template>
    <div class="image-block">
        <img :src="block.props.url" :alt="block.props.alt" />
    </div>
</template>
<style lang="scss" scoped>
.image-block {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        vertical-align: middle;
    }
}
</style>
