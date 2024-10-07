import { Node } from '../../../three-types'
import ParameterNode from 'three/src/nodes/core/ParameterNode.js'
export { ParameterNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './PropertyNode'

declare module '../../../lib/3/three'
{
    interface Three {
        ParameterNode: typeof ParameterNode
    }
}

Three.ParameterNode = ParameterNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parameterNode: ParameterNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        parameterNode: typeof parameterNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        parameterNode: typeof _parameterNode
    }
}


const parameterNode = ([
    'nodeType',
    'name',
] as const).distinct()
consParams.parameterNode = parameterNode



const _parameterNode = ([...objProps.propertyNode,
    'isParameterNode',
] as const).distinct()
objProps.parameterNode = _parameterNode

export type ParameterNodeProps = Node<ParameterNode, typeof ParameterNode, { nodeType: string, name?: string | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        parameterNode: Partial<{ nodeType: string, name?: string | null }>
    }
}

defaults.parameterNode = {}

