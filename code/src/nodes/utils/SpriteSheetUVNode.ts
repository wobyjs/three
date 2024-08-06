import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import SpriteSheetUVNode from 'three/src/nodes/utils/SpriteSheetUVNode.js'
export { SpriteSheetUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        spriteSheetUvNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        spriteSheetUvNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SpriteSheetUVNode.d.ts

consParams.spriteSheetUvNode = [
    'countNode',
    'uvNode',
    'frameNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SpriteSheetUvNode.d.ts    

objParams.spriteSheetUvNode = [...objParams.node,
    'countNode',
    'uvNode',
    'frameNode',
].distinct()

export type SpriteSheetUVNodeProps = Node<SpriteSheetUVNode, typeof SpriteSheetUVNode, { countNode: ENode; uvNode?: ENode; frameNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        spriteSheetUvNode: Partial<{ countNode: ENode; uvNode?: ENode; frameNode?: ENode; }>
    }
}

defaults.spriteSheetUvNode = {}

