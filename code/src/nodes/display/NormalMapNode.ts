import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import NormalMapNode from 'three/src/nodes/display/NormalMapNode.js'
export { NormalMapNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        NormalMapNode: typeof NormalMapNode
    }
}

Three.NormalMapNode = NormalMapNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            normalMapNode: NormalMapNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        normalMapNode: typeof normalMapNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        normalMapNode: typeof _normalMapNode
    }
}



const normalMapNode = ([
    'node',
    'scaleNode',
] as const).distinct()
consParams.normalMapNode = normalMapNode



const _normalMapNode = ([...objProps.tempNode,
    'node',
    'scaleNode',
    'normalMapType',
] as const).distinct()
objProps.normalMapNode = _normalMapNode

export type NormalMapNodeProps = Node<NormalMapNode, typeof NormalMapNode, { node: ENode; scaleNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        normalMapNode: Partial<{ node: ENode; scaleNode?: ENode | null; }>
    }
}

defaults.normalMapNode = {}

