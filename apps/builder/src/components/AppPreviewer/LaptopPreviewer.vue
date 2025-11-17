<script setup lang="ts">
import type { PreviewType } from './type'
import PreviewTypeSwitcher from './PreviewTypeSwitcher.vue'
import BlacksRenderer from '../blacks/BlacksRenderer.vue'

interface IProps {
    previewType: PreviewType
}

const props = defineProps<IProps>()

interface IEmits {
    (e: 'previewTypeChange', type: PreviewType): void
}

const emits = defineEmits<IEmits>()

function previewTypeChangeHandler(type: PreviewType) {
    emits('previewTypeChange', type)
}
</script>
<template>
    <div class="layout-runner">
        <div class="layout-runner-navigator">
            <div></div>
            <div class="address-wrapper">https://www.example.com/path/to/yoursite</div>
            <PreviewTypeSwitcher :preview-type="props.previewType" @preview-type-change="previewTypeChangeHandler"></PreviewTypeSwitcher>
        </div>
        <div class="layout-runner-content-wrapper tiny-scrollbar">
            <div class="layout-runner-content-header">
                <div class="layout-runner-content-navigator"></div>
                <div class="layout-runner-content-title">Nyh VBuilder</div>
            </div>
            <div class="layout-runner-content">
                <BlacksRenderer></BlacksRenderer>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.layout-runner {
    --container-bg-color: #3d6583;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    margin: 8px 40px;
    background-color: var(--color-white);
    border-radius: 8px;
    box-shadow:
        0 0 1px rgb(62 65 86 / 37.5%),
        0 12px 24px rgb(62 65 86 / 15%),
        0 20px 40px rgb(62 65 86 / 10%);

    .layout-runner-navigator {
        height: 42px;
        flex-shrink: 0;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        align-items: center;
        gap: 8px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-gray-200);
        background-color: var(--color-gray-100);
        font-size: var(--font-size-normal);

        .address-wrapper {
            grid-column: span 2;
            border-radius: 8px;
            background-color: var(--color-gray-300);
            color: var(--color-gray-800);
            padding: 3px 32px 3px 12px;
            cursor: pointer;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;

            &:hover {
                background-color: var(--color-gray-400);
            }
        }
    }

    .layout-runner-content-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: auto;

        .layout-runner-content-header {
            .layout-runner-content-navigator {
                height: 56px;
                font-size: var(--font-size-normal);
                align-items: center;
                padding: 0 16px;
                background-color: var(--container-bg-color);
                border-bottom: 1px solid rgb(31 41 55 / 8%);
            }

            .layout-runner-content-title {
                display: flex;
                align-items: center;
                padding: 0 90px;
                height: 90px;
                font-size: 24px;
                font-weight: var(--font-weight-bolder);
                color: var(--color-white);
                background-color: var(--container-bg-color);
            }
        }

        .layout-runner-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 90px;
        }
    }
}
</style>
