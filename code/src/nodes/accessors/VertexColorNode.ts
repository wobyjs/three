import { Node } from '../../../three-types'
import VertexColorNode from 'three/src/nodes/accessors/VertexColorNode.js'
export { VertexColorNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VertexColorNode: typeof VertexColorNode
    }
}

Three.VertexColorNode = VertexColorNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vertexColorNode: VertexColorNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        vertexColorNode: typeof vertexColorNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        vertexColorNode: typeof _vertexColorNode
    }
}



const vertexColorNode = ([
    'index',
] as const).distinct()
consParams.vertexColorNode = vertexColorNode



const _vertexColorNode = ([...objProps.attributeNode,
    'index',
] as const).distinct()
objProps.vertexColorNode = _vertexColorNode

export type VertexColorNodeProps = Node<VertexColorNode, typeof VertexColorNode, { index?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexColorNode: { index?: number; }
    }
}

defaults.vertexColorNode = {}

