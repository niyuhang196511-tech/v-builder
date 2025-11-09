<script setup lang="ts"></script>
<template>
    <ul class="outline-list">
        <div class="outline-item" v-for="i in 3" :key="i">
            <div class="outline-item-icon">icon</div>
            <span class="outline-item-name">Name</span>
            <span class="outline-item-title">Title</span>
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
