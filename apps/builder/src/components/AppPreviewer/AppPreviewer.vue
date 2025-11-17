<script setup lang="ts">
import { ref } from 'vue'
import type { PreviewType } from './type'
import LaptopPreviewer from './LaptopPreviewer.vue'
import MobilePreviewer from './MobilePreviewer.vue'

const previewType = ref<PreviewType>('laptop')

const previewTypeChangeHandler = (type: PreviewType) => {
    previewType.value = type
}
</script>

<template>
    <div class="app-previewer-wrapper">
        <LaptopPreviewer
            v-if="previewType === 'laptop'"
            :preview-type="previewType"
            @preview-type-change="previewTypeChangeHandler"
        ></LaptopPreviewer>
        <MobilePreviewer v-else :preview-type="previewType" @preview-type-change="previewTypeChangeHandler"></MobilePreviewer>
    </div>
</template>

<style lang="scss" scoped>
.app-previewer-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    flex: 1;
    background-color: var(--color-gray-100);
}
</style>
