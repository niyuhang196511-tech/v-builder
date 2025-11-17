<script setup lang="ts">
import { storeToRefs } from 'pinia'
import SmoothDndContainer from '../SmoothDnd/SmoothDndContainer.vue'
import SmoothDndDraggable from '../SmoothDnd/SmoothDndDraggable.vue'
import BlockRenderer from './BlockRenderer.vue'

import { useAppEditorStore } from '@/stores/appEditor'
import { toRaw } from 'vue'
import { arrayMove } from '@/utils/array'
import type { DropResult } from 'smooth-dnd'

const appEditorStore = useAppEditorStore()
const { blocks } = storeToRefs(appEditorStore)
const { updateBlocks } = appEditorStore

const applyDrag = <T extends any[]>(arr: T, dragResult: DropResult) => {
    const { removedIndex, addedIndex, payload } = dragResult

    const result = [...arr]

    // 没做操作
    if (addedIndex === null) return result

    // 添加
    if (addedIndex !== null && removedIndex === null) {
        result.splice(addedIndex, 0, {
            id: `${Math.random()}`,
            ...payload,
        })
    }

    // 移动
    if (addedIndex !== null && removedIndex !== null) {
        return arrayMove(result, removedIndex, addedIndex)
    }

    return result
}
</script>
<template>
    <SmoothDndContainer
        drag-handle-selector=".handle"
        group-name="blocks"
        orientation="vertical"
        tag="div"
        class="renderer-dnd-container"
        :onDrop="e => updateBlocks(applyDrag(toRaw(blocks), e))"
    >
        <SmoothDndDraggable v-for="(block, index) in blocks" :key="block.id">
            <BlockRenderer :block="block" :index="index" />
        </SmoothDndDraggable>
    </SmoothDndContainer>
</template>
<style lang="scss" scoped>
.renderer-dnd-container {
    width: 100%;
}
</style>
