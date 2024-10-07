import { Node } from '../../../three-types'
import UniformNode from 'three/src/nodes/core/UniformNode.js'
export { UniformNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformNode: UniformNodeProps<unknown>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        uniformNode: typeof uniformNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        uniformNode: typeof _uniformNode
    }
}



const uniformNode = ([
    'value',
    'nodeType',
] as const).distinct()
consParams.uniformNode = uniformNode



const _uniformNode = ([
] as const).distinct()
objProps.uniformNode = _uniformNode

export type UniformNodeProps<T> = Node<UniformNode<T>, typeof UniformNode<T>, { value: T; nodeType?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        uniformNode: Partial<{ value: any; nodeType?: string | null; }>
    }
}

defaults.uniformNode = {}

