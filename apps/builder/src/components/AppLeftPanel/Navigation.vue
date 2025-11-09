<script setup lang="ts">
import { WebPage } from '@icon-park/vue-next'
import { ref } from 'vue'

interface NavigationItem {
    type: 'page' | 'folder'
    label: string
}

const pages: Array<NavigationItem> = [
    {
        type: 'page',
        label: '首页',
    },
    {
        type: 'page',
        label: 'New Screen',
    },
    {
        type: 'page',
        label: 'Some Things',
    },
]

const activatedPageIndex = ref(0)
</script>
<template>
    <ul class="navigation-list">
        <li :class="['navigation-item', activatedPageIndex === index && 'active']" v-for="(page, index) in pages" :key="page.type">
            <WebPage class="navigation-item-icon" />
            <span class="navigation-item-name">{{ page.label }}</span>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.navigation-list {
    .navigation-item {
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

        &.active {
            background-color: var(--color-gray-100);
        }

        .navigation-item-icon {
            color: var(--color-gray-800);
        }

        .navigation-item-name {
            margin-left: 8px;
            font-size: var(--font-size-normal);
            color: var(--color-gray-900);
        }
    }
}
</style>
