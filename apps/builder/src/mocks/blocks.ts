import type { BlockItem } from '@/types/block'

export const blocks: BlockItem[] = [
    {
        id: '1',
        type: 'HeroTitle',
        label: 'Hero Title',
        props: {
            content: '标题',
        },
    },
    {
        id: '2',
        type: 'Quote',
        label: 'Quote',
        props: {
            content: 'Quote Content',
            status: 'success',
        },
    },
    {
        id: '3',
        type: 'Image',
        label: 'Image',
        props: {
            url: 'https://images.pexels.com/photos/17108884/pexels-photo-17108884.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            alt: 'Image Alt Text',
        },
    },
    {
        id: '4',
        type: 'Chart',
        label: 'Charts',
        props: {
            chartType: 'echarts',
        },
    },
    {
        id: '5',
        type: 'Notes',
        label: 'Notes',
        props: {
            content: `
            <p>I’m <em>running</em> Tiptap <s>with</s> Vue.js. 🎉</p>
            <p><strong>You</strong> can also teach the editor new things. For example to recognize hex colors and add a color</p>
            <p> swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
        `,
        },
    },
    {
        id: '6',
        type: 'View',
        label: 'View',
        props: {
            fields: {
                id: {
                    type: 'text',
                },
            },
            fieldProps: [],
            data: [],
        },
    },
    {
        id: '7',
        type: 'Button',
        label: 'Button',
        props: {
            content: 'Button',
        },
    },
    {
        id: '8',
        type: 'Form',
        label: 'Form',
        props: {
            fields: [
                { id: '1', label: 'Name', type: 'input', name: 'name', required: true, placeholder: 'Enter your name' },
                { id: '2', label: 'Gender', type: 'select', name: 'gender', required: true, placeholder: 'Select' },
            ],
        },
    },
]
