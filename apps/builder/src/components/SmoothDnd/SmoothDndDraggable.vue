<script setup lang="ts">
import { computed } from 'vue'
import { constants } from 'smooth-dnd'

interface IProps {
    tag?: string | { value: string; props?: Record<string, any> }
}

const props = withDefaults(defineProps<IProps>(), { tag: 'div' })

const tagName = computed(() => (typeof props.tag === 'string' ? props.tag : props.tag.value))
const tagProps = computed(() => {
    const baseProps = typeof props.tag === 'string' ? {} : props.tag.props || {}

    const classes = baseProps.class
        ? Array.isArray(baseProps.class)
            ? [...baseProps.class, constants.wrapperClass]
            : [baseProps.class, constants.wrapperClass]
        : constants.wrapperClass

    return { ...baseProps, class: classes }
})
</script>

<template>
    <component :is="tagName" v-bind="tagProps">
        <slot />
    </component>
</template>
