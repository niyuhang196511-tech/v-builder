<script setup lang="ts">
import type { Icon } from '@icon-park/vue-next/lib/runtime'
import type { PreviewType } from './type'
import { Iphone, Laptop } from '@icon-park/vue-next'

interface IProps {
    previewType: PreviewType
}

const props = defineProps<IProps>()

interface IEmits {
    (e: 'previewTypeChange', type: PreviewType): void
}

const emits = defineEmits<IEmits>()

const previewTypeChangeHandler = (type: PreviewType) => {
    emits('previewTypeChange', type)
}

const icons: { type: PreviewType; icon: Icon }[] = [
    {
        type: 'mobile',
        icon: Iphone,
    },
    {
        type: 'laptop',
        icon: Laptop,
    },
]
</script>
<template>
    <div class="icon-button-wrapper">
        <div class="icon-button" v-for="icon in icons" :key="icon.type">
            <component
                :is="icon.icon"
                :size="20"
                :fill="props.previewType === icon.type ? 'var(--color-black)' : 'var(--color-gray-500)'"
                @click="previewTypeChangeHandler(icon.type)"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.icon-button-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    color: var(--color-gray-700);

    .icon-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: var(--color-gray-200);
        }
    }
}
</style>
