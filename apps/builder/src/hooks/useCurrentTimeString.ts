import { onMounted, onUnmounted, ref } from 'vue'

export const useCurrentTimeString = () => {
    const currentTime = ref(new Date().toLocaleTimeString())

    let timer: number

    onMounted(() => {
        timer = setInterval(() => {
            currentTime.value = new Date().toLocaleTimeString()
        }, 1000)
    })

    onUnmounted(() => {
        clearInterval(timer)
    })

    return [currentTime]
}
