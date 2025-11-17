<script setup lang="ts">
import type { FormBlockItem, FormField } from '@/types/block'
import { h } from 'vue'

interface IProps {
    block: FormBlockItem
}

defineProps<IProps>()

const renderField = (field: FormField) => {
    return h(field.type, { ...field })
}
</script>
<template>
    <div class="form-block">
        <div class="form-item" v-for="field in block.props.fields" :key="field.id">
            <component class="item" :is="renderField(field)" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.form-block {
    width: 100%;
    display: flex;
    flex-direction: column;

    .form-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 12px;
    }
}
</style>
