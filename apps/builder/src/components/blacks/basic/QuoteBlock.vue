<script setup lang="ts">
import { Error, Success, Wallet } from '@icon-park/vue-next'
import type { QuoteBlockItem, QuoteBlockStatus } from '@/types/block'
import type { Icon } from '@icon-park/vue-next/lib/runtime'
import { computed } from 'vue'

interface IProps {
    block: QuoteBlockItem
}

const props = defineProps<IProps>()

interface QuoteItemStyle {
    color: string
    bgColor: string
    borderColor: string
    icon: Icon
}

const STATUS_MAP: Record<QuoteBlockStatus, QuoteItemStyle> = {
    success: {
        color: '#059669',
        bgColor: '#E4F2E9',
        borderColor: '#79DBA2',
        icon: Success,
    },
    warning: {
        color: '#E18F05',
        bgColor: '#F8ECEC',
        borderColor: '#79DBA2',
        icon: Error,
    },
    error: {
        color: '#DC2C26',
        bgColor: '#F8ECEC',
        borderColor: '#F3A9A5',
        icon: Wallet,
    },
}

const currentQuoteItemStyle = computed<QuoteItemStyle>(() => {
    return STATUS_MAP[props.block.props.status]
})
</script>
<template>
    <div class="quote-block" :style="{ backgroundColor: currentQuoteItemStyle.bgColor, color: currentQuoteItemStyle.color }">
        <component :is="currentQuoteItemStyle.icon" />
        <span class="quote-text">{{ props.block.props.content }}</span>
    </div>
</template>
<style lang="scss" scoped>
.quote-block {
    display: flex;
    align-items: center;
    flex: 1;
    font-size: var(--font-size-large);
    padding: 8px 18px;
    border-radius: 8px;

    .quote-text {
        margin-left: 6px;
    }
}
</style>
