import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import SpriteSheetUVNode from 'three/src/nodes/utils/SpriteSheetUVNode.js'
export { SpriteSheetUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        SpriteSheetUVNode: typeof SpriteSheetUVNode
    }
}

Three.SpriteSheetUVNode = SpriteSheetUVNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spriteSheetUvNode: SpriteSheetUVNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        spriteSheetUvNode: typeof spriteSheetUvNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        spriteSheetUvNode: typeof _spriteSheetUvNode
    }
}



const spriteSheetUvNode = ([
    'countNode',
    'uvNode',
    'frameNode',
] as const).distinct()
consParams.spriteSheetUvNode = spriteSheetUvNode



const _spriteSheetUvNode = ([...objProps.node,
    'countNode',
    'uvNode',
    'frameNode',
] as const).distinct()
objProps.spriteSheetUvNode = _spriteSheetUvNode

export type SpriteSheetUVNodeProps = Node<SpriteSheetUVNode, typeof SpriteSheetUVNode, { countNode: ENode; uvNode?: ENode; frameNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        spriteSheetUvNode: Partial<{ countNode: ENode; uvNode?: ENode; frameNode?: ENode; }>
    }
}

defaults.spriteSheetUvNode = {}

