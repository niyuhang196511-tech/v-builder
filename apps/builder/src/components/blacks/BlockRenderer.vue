<script setup lang="ts">
import { inject, useTemplateRef } from 'vue'
import { useAppEditorStore } from '@/stores/appEditor'
import type { BlockItem } from '@/types/block'
import { storeToRefs } from 'pinia'
import { Delete, Drag } from '@icon-park/vue-next'

interface IProps {
    block: BlockItem
    index: number
}

defineProps<IProps>()

const blockWrapperRef = useTemplateRef('blockWrapperRef')

const appEditorStore = useAppEditorStore()
const { currentBlockId } = storeToRefs(appEditorStore)
const { selectBlock } = appEditorStore

const editable = inject('editable', true)
</script>
<template>
    <div class="block-wrapper" ref="blockWrapperRef" @click="selectBlock(block.id)">
        <component class="block" :is="$blocksMap.get(block.type)?.material" :block="block" />
        <div v-if="editable" :class="['block-wrapper-indicator', { selected: currentBlockId === block.id }]">
            <div class="block-toolbar" v-if="currentBlockId === block.id">
                <div class="block-toolbar-item handle">
                    <Drag />
                </div>
                <div class="block-toolbar-item">
                    <Delete />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.block-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 16px;
    padding: 6px 4px;
    border-radius: 8px;
    background-color: var(--color-white);
    transition: box-shadow 0.2s ease-in-out;

    .block {
        position: relative;
        z-index: 1;
    }

    .block-wrapper-indicator {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 8px;
        pointer-events: none;
        user-select: none;

        &.selected {
            border: 1px solid var(--color-primary);
        }

        .block-toolbar {
            position: absolute;
            left: 0;
            top: -36px;
            z-index: 2;
            display: flex;
            align-items: center;
            padding: 4px 8px;
            gap: 4px;
            background-color: var(--color-black);
            border-radius: 6px;
            pointer-events: visible;

            .block-toolbar-item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 22px;
                height: 22px;
                border-radius: 4px;
                color: var(--color-white);
                cursor: pointer;

                &:nth-of-type(1) {
                    cursor: grab;
                }

                &:hover {
                    background-color: var(--color-gray-800);
                    transition: all 0.2s ease-in-out;
                }
            }
        }
    }
}
</style>

<style lang="css">
.smooth-dnd-draggable-wrapper {
    overflow: visible !important;
}
</style>
