import { defineComponent, h } from 'vue'

export const SmoothDndDraggable = defineComponent({
    name: 'SmoothDndDraggable',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
    },
    render() {
        return h(this.tag, {}, this.$slots.default && this.$slots.default())
    },
})
