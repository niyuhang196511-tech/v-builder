import type { Icon } from '@icon-park/vue-next/lib/runtime'
import type { DefineComponent } from 'vue'

/**
 * 基础区块类型
 */
export type BasicBlockType = 'HeroTitle' | 'View' | 'Chart' | 'Quote' | 'Image'

/**
 * 外部区块类型
 */
export type ExternalBlockType = 'Button' | 'Form' | 'Notes'

/**
 * 区块类型
 */
export type BlockType = BasicBlockType | ExternalBlockType

/**
 * 基础区块项类型
 */
export interface BaseBlockItem<T> {
    id: string // 区块唯一标识
    label: string // 区块名称
    type: BlockType // 区块类型
    props: T // 区块属性
}

/**
 * HeroTitle区块属性类型
 */
export interface HeroTitleBlockProps {
    content: string
}

/**
 *  HeroTitle区块项类型
 */
export type HeroTitleBlockItem = BaseBlockItem<HeroTitleBlockProps>

/**
 * View区块属性类型
 */
export interface ViewBlockProps {
    fields: Record<string, { type: string }>
    fieldProps: { width: number; visible: boolean }[]
    data: { id: string; value: string }[]
}

/**
 * View区块项类型
 */
export type ViewBlockItem = BaseBlockItem<ViewBlockProps>

/**
 * Quote区块属性类型
 */
export type QuoteBlockStatus = 'success' | 'warning' | 'error'

export interface QuoteBlockProps {
    content: string
    status: QuoteBlockStatus
}

/**
 * Quote区块项类型
 */
export type QuoteBlockItem = BaseBlockItem<QuoteBlockProps>

/**
 * Chart类型
 */
export type RendererType = 'canvas' | 'svg'

export type ChartType = 'bar' | 'line' | 'pie'

/**
 * Chart区块属性类型
 */
export interface ChartBlockProps {
    rendererType: RendererType
    chartType: ChartType
}

/**
 * Chart区块项类型
 */
export type ChartBlockItem = BaseBlockItem<ChartBlockProps>

/**
 * Image区块属性类型
 */
export interface ImageBlockProps {
    url: string
    alt: string
}

/**
 * Image区块项类型
 */
export type ImageBlockItem = BaseBlockItem<ImageBlockProps>

/**
 * Button区块属性类型
 */
export interface ButtonBlockProps {
    content: string
}

/**
 * Button区块项类型
 */
export type ButtonBlockItem = BaseBlockItem<ButtonBlockProps>

export type FormFieldType = 'input' | 'select'

export interface FormField {
    id: string
    label: string
    type: FormFieldType
    name: string
    required?: boolean
    placeholder?: string
}

export interface FormBlockProps {
    fields: FormField[]
}

/**
 * Form区块项类型
 */
export type FormBlockItem = BaseBlockItem<FormBlockProps>

/**
 *  Notes区块属性类型
 */
export interface NotesBlockProps {
    content: string
}

/**
 * Notes区块项类型
 */
export type NotesBlockItem = BaseBlockItem<NotesBlockProps>

/**
 * 区块项类型合集
 */
export type BlockItem =
    // Basic Blocks
    | HeroTitleBlockItem
    | ViewBlockItem
    | QuoteBlockItem
    | ImageBlockItem
    | ChartBlockItem
    // External Blocks
    | ButtonBlockItem
    | FormBlockItem
    | NotesBlockItem

/**
 * 区块元信息类型
 */
export interface BlockMeta {
    type: BlockType
    label: string
    icon: Icon
    material: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
}
