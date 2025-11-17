import { blockMapSymbol, blockSuite } from '@/constants/block'
import type { BlockMeta } from '@/types/block'
import type { App } from 'vue'

const blockMap = blockSuite.getBlocksMap()

export const initBlocks = () => {
    const ins = {
        install(app: App<Element>) {
            app.provide(blockMapSymbol, blockMap)
            app.config.globalProperties.$blocksMap = blockMap
        },
    }

    return ins
}

declare module 'vue' {
    export interface ComponentCustomProperties {
        $blocksMap: Map<string, BlockMeta>
    }
}
