<script setup lang="ts">
import type { PreviewType } from './type'
import PreviewTypeSwitcher from './PreviewTypeSwitcher.vue'
import BlacksRenderer from '../blacks/BlacksRenderer.vue'
import StatusBar from './StatusBar.vue'

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
            <PreviewTypeSwitcher :preview-type="props.previewType" @preview-type-change="previewTypeChangeHandler"></PreviewTypeSwitcher>
        </div>

        <div class="simulator-wrapper tiny-scroller">
            <div class="simulator-header">
                <StatusBar></StatusBar>
                <div class="simulator-navigator-wrapper">
                    <div class="simulator-navigator">Nyh VBuilder</div>
                </div>
            </div>
            <div class="simulator">
                <BlacksRenderer></BlacksRenderer>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.layout-runner {
    --container-bg-color: #3d6583;
    flex: 1;

    .layout-runner-navigator {
        height: 42px;
        display: grid;
        font-size: var(--font-size-normal);
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        padding: 0 16px;
        background-color: var(--color-gray-100);
        width: 100%;
    }

    .simulator-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 393px;
        height: 852px;
        margin: 0 auto;
        border-radius: 55px;
        overflow: hidden;
        overflow-y: auto;
        background-color: var(--color-white);
        box-shadow:
            0 0 0 5px #151515,
            0 0 0 6px var(--container-bg-color),
            0 -7.5px 1.5px rgb(255 255 255 / 40%),
            7.5px 0 1.5px rgb(255 255 255 / 25%),
            -7.5px 0 1.5px rgb(255 255 255 / 40%),
            0 7.5px 1.5px rgb(255 255 255 / 25%),
            0 0 0 9px var(--container-bg-color),
            6px 8px 16px rgb(0 0 0 / 25%),
            20px 32px 72px rgb(0 0 0 / 20%);

        &::-webkit-scrollbar {
            display: none;
        }

        .simulator-header {
            position: sticky;
            top: 0;
            z-index: 2;

            .simulator-navigator {
                height: 56px;
                display: flex;
                align-items: center;
                padding: 0 12px;
                font-size: 18px;
                font-weight: var(--font-weight-bolder);
                color: var(--color-white);
                background-color: var(--container-bg-color);
                border-bottom: 1px solid rgb(31 41 55 / 8%);
            }
        }

        .simulator {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 12px 32px;
            flex: 1;
        }
    }
}
</style>
