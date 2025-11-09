import { ref, type Ref } from 'vue'

type UseDisclosureReturn = [
    Ref<boolean>,
    {
        open: () => void
        close: () => void
        toggle: () => void
    },
]

/**
 * 这是一个用于管理显示和隐藏状态的自定义 Hook。
 * @param initialState
 */
export const useDisclosure = (initialState = false): UseDisclosureReturn => {
    const flag = ref(initialState ?? false)

    const open = () => {
        flag.value = true
    }

    const close = () => {
        flag.value = false
    }

    const toggle = () => {
        flag.value = !flag.value
    }

    return [flag, { open, close, toggle }]
}
