import HeroTitleBlock from '@/components/blacks/basic/HeroTitleBlock.vue'
import QuoteBlock from '@/components/blacks/basic/QuoteBlock.vue'
import ImageBlock from '@/components/blacks/basic/ImageBlock.vue'
import ViewBlock from '@/components/blacks/basic/ViewBlock.vue'
import ChartBlock from '@/components/blacks/basic/ChartBlock.vue'
import ButtonBlock from '@/components/blacks/external/ButtonBlock.vue'
import FormBlock from '@/components/blacks/external/FormBlock.vue'
import NotesBlock from '@/components/blacks/external/NotesBlock.vue'
import { ChartLine, Form, HamburgerButton, ImageFiles, Notes, Quote, Table, TitleLevel } from '@icon-park/vue-next'
import type { BlockItem, BlockType, BlockMeta } from '@/types/block'
import { nanoid } from 'nanoid'

export const blockMetaList: BlockMeta[] = [
    {
        type: 'HeroTitle',
        label: 'Hero Title',
        icon: TitleLevel,
        material: HeroTitleBlock,
    },
    {
        type: 'View',
        label: 'View',
        icon: Table,
        material: ViewBlock,
    },
    {
        type: 'Quote',
        label: 'Quote',
        icon: Quote,
        material: QuoteBlock,
    },
    {
        type: 'Image',
        label: 'Image',
        icon: ImageFiles,
        material: ImageBlock,
    },
    {
        type: 'Chart',
        label: 'Chart',
        icon: ChartLine,
        material: ChartBlock,
    },
    {
        type: 'Button',
        label: 'Button',
        icon: HamburgerButton,
        material: ButtonBlock,
    },
    {
        type: 'Form',
        label: 'Form',
        icon: Form,
        material: FormBlock,
    },
    {
        type: 'Notes',
        label: 'Notes',
        icon: Notes,
        material: NotesBlock,
    },
]

export class BlockSuite {
    private blocks = blockMetaList

    constructor() {}

    getBlocksMap() {
        const map = new Map<string, BlockMeta>()
        this.blocks.forEach(block => {
            map.set(block.type, block)
        })
        return map
    }

    getBlocks() {
        return this.blocks
    }

    addBlock(block: BlockMeta) {
        this.blocks.push(block)
    }

    hasBlock(type: BlockType) {
        return this.getBlocksMap().has(type)
    }
}

export const blockSuite = new BlockSuite()

export const blockMapSymbol = Symbol('blocksMap')

export const getBlockDefaultData = (type: BlockType): BlockItem => {
    const id = nanoid()
    switch (type) {
        case 'HeroTitle':
            return {
                id,
                type: 'HeroTitle',
                label: 'Hero Title',
                props: {
                    content: 'This is a Hero Title',
                },
            }
        case 'View':
            return {
                id,
                type: 'View',
                label: 'View',
                props: {
                    fields: {
                        id: { type: 'text' },
                    },
                    fieldProps: [],
                    data: [],
                },
            }
        case 'Quote':
            return {
                id,
                type: 'Quote',
                label: 'Quote',
                props: {
                    content: 'This is a Quote',
                },
            }
        case 'Image':
            return {
                id,
                type: 'Image',
                label: 'Image',
                props: {
                    url: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1600',
                    alt: 'Image',
                },
            }
        case 'Chart':
            return {
                id,
                type: 'Chart',
                label: 'Chart',
                props: {
                    content: 'This is a Chart',
                },
            }
        case 'Button':
            return {
                id,
                type: 'Button',
                label: 'Button',
                props: {
                    content: 'Click Me',
                },
            }
        case 'Form':
            return {
                id,
                type: 'Form',
                label: 'Form',
                props: {
                    fields: [],
                },
            }
        case 'Notes':
            return {
                id,
                type: 'Notes',
                label: 'Notes',
                props: {
                    content: 'These are some notes.',
                },
            }
        default:
            throw new Error(`Unsupported block type: ${type}`)
    }
}
