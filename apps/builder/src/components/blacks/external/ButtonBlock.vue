<script setup lang="ts">
import type { ButtonBlockItem } from '@/types/block'
import { watchEffect } from 'vue'

interface IProps {
    block: ButtonBlockItem
}

const props = defineProps<IProps>()

watchEffect(() => {
    console.log(props.block.props.content)
})
</script>
<template>
    <div class="button-block">{{ block.props.content }}</div>
</template>
<style lang="scss" scoped>
.button-block {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    padding: 0 12px;
    border-radius: 8px;
    font-weight: var(--font-weight-bold);
    color: var(--color-white);
    background-color: var(--color-primary);
    cursor: pointer;

    &:hover {
        background: var(--color-primary-hover);
    }
}
</style>
