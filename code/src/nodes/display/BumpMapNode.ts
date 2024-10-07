import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import BumpMapNode from 'three/src/nodes/display/BumpMapNode.js'
export { BumpMapNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        BumpMapNode: typeof BumpMapNode
    }
}

Three.BumpMapNode = BumpMapNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bumpMapNode: BumpMapNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bumpMapNode: typeof bumpMapNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        bumpMapNode: typeof _bumpMapNode
    }
}


const bumpMapNode = ([
    'textureNode',
    'scaleNode',
] as const).distinct()
consParams.bumpMapNode = bumpMapNode



const _bumpMapNode = ([...objProps.tempNode,
    'textureNode',
    'scaleNode',
] as const).distinct()
objProps.bumpMapNode = _bumpMapNode

export type BumpMapNodeProps = Node<BumpMapNode, typeof BumpMapNode, { textureNode: ENode, scaleNode?: ENode | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bumpMapNode: Partial<{ textureNode: ENode, scaleNode?: ENode | null }>
    }
}

defaults.bumpMapNode = {}


