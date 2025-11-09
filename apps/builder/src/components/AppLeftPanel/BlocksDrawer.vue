<script setup lang="ts"></script>
<template>
    <div class="blocks-drawer-wrapper">
        <h3 class="drawer-title">BLOCKS</h3>
        <ul>
            <li v-for="i in 10" :key="i">block {{ i }}</li>
        </ul>
    </div>
</template>
<!-- <style lang="scss" scoped></style> -->
