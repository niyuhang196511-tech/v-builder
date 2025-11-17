import { defineStore } from 'pinia'
import { ref } from 'vue'
import { blocks as blocksData } from '@/mocks/blocks'
import type { BlockItem } from '@/types/block'

export const useAppEditorStore = defineStore('app-editor', () => {
    /**
     * 当前选中的区块ID
     */
    const currentBlockId = ref<BlockItem['id'] | null>(null)

    /**
     * 区块列表
     */
    const blocks = ref<BlockItem[]>(blocksData)

    /**
     * 选中区块
     * @param blockId 区块ID
     */
    const selectBlock = (blockId: string) => {
        currentBlockId.value = blockId
    }

    /**
     * 更新区块列表
     * @param newBlocks
     */
    const updateBlocks = (newBlocks: Array<BlockItem>) => {
        blocks.value = newBlocks
    }

    /**
     * 根据ID更新区块
     * @param id 区块ID
     * @param newBlock 新的区块数据
     */
    const updateBlock = (id: string, newBlock: BlockItem) => {
        for (const block of blocks.value) {
            if (block.id === id) {
                Object.assign(block, newBlock)
                continue
            }
        }
    }

    return {
        currentBlockId,
        blocks,
        selectBlock,
        updateBlocks,
        updateBlock,
    }
})
