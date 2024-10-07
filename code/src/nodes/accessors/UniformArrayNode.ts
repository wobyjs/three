import { Node } from '../../../three-types'
import UniformArrayNode from 'three/src/nodes/accessors/UniformArrayNode.js'
export { UniformArrayNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        UniformArrayNode: typeof UniformArrayNode
        // UniformArrayElementNode: typeof UniformArrayElementNode
    }
}

Three.UniformArrayNode = UniformArrayNode
// Three.UniformArrayElementNode = UniformArrayElementNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformArrayNode: UniformArrayNodeProps,
            // uniformArrayElementNode: UniformArrayElementNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        uniformArrayNode: typeof uniformArrayNode
        uniformArrayElementNode: typeof uniformArrayElementNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        uniformArrayNode: typeof _uniformArrayNode
        uniformArrayElementNode: typeof _uniformArrayElementNode
    }
}



const uniformArrayElementNode = ([
    'arrayBuffer',
    'indexNode',
] as const).distinct()
consParams.uniformArrayElementNode = uniformArrayElementNode


const uniformArrayNode = ([
    'value',
    'elementType',
] as const).distinct()
consParams.uniformArrayNode = uniformArrayNode



const _uniformArrayElementNode = ([...objProps.arrayElementNode,
] as const).distinct()
objProps.uniformArrayElementNode = _uniformArrayElementNode


const _uniformArrayNode = ([...objProps.bufferNode,
    'array',
    'elementType',
    'isArrayBufferNode',
] as const).distinct()
objProps.uniformArrayNode = _uniformArrayNode

export type UniformArrayNodeProps = Node<UniformArrayNode, typeof UniformArrayNode, { value: unknown[], elementType?: string | null }>
// export type UniformArrayElementNodeProps = Object3DNode<UniformArrayElementNode, typeof UniformArrayElementNode, { arrayBuffer: Node, indexNode: Node }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        uniformArrayNode: Partial<{ value: unknown[]; elementType?: string | null; }>
    }
}

defaults.uniformArrayNode = {}

