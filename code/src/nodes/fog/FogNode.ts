import { Node as ENode, FogNode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
export { FogNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FogNode: typeof FogNode
    }
}

Three.FogNode = FogNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogNode: FogNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fogNode: typeof fogNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        fogNode: typeof _fogNode
    }
}



const fogNode = ([
] as const).distinct()
consParams.fogNode = fogNode



const _fogNode = ([...objProps.node,
    'isFogNode',
    'colorNode',
    'factorNode',
] as const).distinct()
objProps.fogNode = _fogNode

export type FogNodeProps = Node<FogNode, typeof FogNode, { colorNode: ENode | null; factorNode: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fogNode: Partial<{ colorNode: ENode | null; factorNode: ENode | null; }>
    }
}

defaults.fogNode = {}

