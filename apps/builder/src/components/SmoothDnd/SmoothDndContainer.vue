<script setup lang="ts">
import type { ContainerOptions, SmoothDnD } from 'smooth-dnd'
import { dropHandlers, smoothDnD, constants } from 'smooth-dnd'
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'

interface IProps extends ContainerOptions {
    tag?: string | { value: string; props?: Record<string, any> }
}

const props = withDefaults(defineProps<IProps>(), { tag: 'div' })

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler
smoothDnD.wrapChild = false

const tagName = computed(() => (typeof props.tag === 'string' ? props.tag : props.tag.value))

const tagProps = computed(() => {
    const baseProps = typeof props.tag === 'string' ? {} : props.tag.props || {}

    return {
        ...baseProps,
        class: baseProps.class
            ? Array.isArray(baseProps.class)
                ? [...baseProps.class, constants.containerClass]
                : [baseProps.class, constants.containerClass]
            : constants.containerClass,
    }
})

const containerInstance = ref<SmoothDnD>()
const containerElement = useTemplateRef<HTMLElement>('containerElement')

onMounted(() => {
    if (containerElement.value) {
        containerInstance.value = smoothDnD(containerElement.value, {
            ...props,
        })
    }
})

onUnmounted(() => {
    if (containerInstance.value) {
        containerInstance.value.dispose()
    }
})

defineExpose({
    containerInstance,
})
</script>
<template>
    <component :is="tagName" v-bind="tagProps" ref="containerElement">
        <slot />
    </component>
</template>
<!-- <style lang="scss" scoped></style> -->
