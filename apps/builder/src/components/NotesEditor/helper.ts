import { Node } from '@tiptap/pm/model'
import { Decoration, DecorationSet } from '@tiptap/pm/view'

export function findColors(doc: Node): DecorationSet {
    const hexColorReg = /#(?:[0-9a-fA-F]{3}){1,2}\b/g
    const decorations: Decoration[] = []

    doc.descendants((node, postion) => {
        if (!node.text) return

        Array.from(node.text.matchAll(hexColorReg)).forEach(match => {
            const color = match[0]
            const index = match.index || 0
            const from = postion + index
            const to = from + color.length
            const decoration = Decoration.inline(from, to, {
                class: 'color',
                style: '--color: ' + color,
            })
            decorations.push(decoration)
        })
    })
    return DecorationSet.create(doc, decorations)
}
