<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAppEditorStore } from '@/stores/appEditor'

const appEditorStore = useAppEditorStore()
const { blocks } = storeToRefs(appEditorStore)
</script>
<template>
    <ul class="outline-list">
        <div class="outline-item" v-for="block in blocks" :key="block.id">
            <component class="outline-item-icon" :is="$blocksMap.get(block.type)?.icon" />
            <span class="outline-item-name">{{ $blocksMap.get(block.type)?.label }}</span>
            <span class="outline-item-title">{{ block.label }}</span>
        </div>
    </ul>
</template>
<style lang="scss" scoped>
.outline-list {
    .outline-item {
        display: flex;
        align-items: center;
        padding: 6px 10px;
        margin-bottom: 4px;
        color: var(--color-text);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background-color: var(--color-gray-100);
        }

        .outline-item-icon {
            color: var(--color-gray-800);
        }

        .outline-item-name {
            margin-left: 8px;
            font-size: var(--font-size-normal);
            color: var(--color-gray-900);
        }

        .outline-item-title {
            flex: 1;
            margin-left: 8px;
            font-size: var(--font-size-normal);
            color: var(--color-gray-700);
        }
    }
}
</style>
