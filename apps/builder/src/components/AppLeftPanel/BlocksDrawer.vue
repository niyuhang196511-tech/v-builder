<script setup lang="ts">
import SmoothDndContainer from '@/components/SmoothDnd/SmoothDndContainer.vue'
import SmoothDndDraggable from '@/components/SmoothDnd/SmoothDndDraggable.vue'

import { blockMetaList, getBlockDefaultData } from '@/constants/block'

const getChildPayload = (index: number) => {
    const { type } = blockMetaList[index]!
    return getBlockDefaultData(type)
}
</script>
<template>
    <div class="component-sub-drawer">
        <SmoothDndContainer
            behaviour="copy"
            group-name="blocks"
            orientation="vertical"
            tag="div"
            class="block-list"
            :get-child-payload="getChildPayload"
        >
            <SmoothDndDraggable v-for="block in blockMetaList" :key="block.type">
                <div class="block-item">
                    <div class="block-icon-wrapper">
                        <component :is="block.icon" />
                    </div>
                    <span class="block-label">{{ block.label }}</span>
                </div>
            </SmoothDndDraggable>
        </SmoothDndContainer>
    </div>
</template>
<style lang="scss" scoped>
.component-sub-drawer {
    height: 100%;

    .block-list {
        --grid-item-color: #ef5f4f;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2px;
        padding-bottom: 8px;

        .block-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: background-color 0.125s ease 0s;
            padding: 8px 0;
            cursor: grab;
            user-select: none;

            &:hover {
                background-color: var(--color-gray-200);
            }

            .block-icon-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                margin-bottom: 4px;
                border-radius: 8px;
                color: var(--color-white);
                font-size: var(--font-size-large);
                background-color: var(--grid-item-color);
            }

            .block-label {
                font-size: var(--font-size-small);
                font-weight: var(--font-weight-blod);
            }
        }
    }
}
</style>
