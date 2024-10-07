import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import BloomNode from 'three/src/nodes/display/BloomNode.js'
export { BloomNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        BloomNode: typeof BloomNode
    }
}

Three.BloomNode = BloomNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bloomNode: BloomNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bloomNode: typeof bloomNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        bloomNode: typeof _bloomNode
    }
}


const bloomNode = ([
    'inputNode',
    'strength',
    'radius',
    'threshold',
] as const).distinct()
consParams.bloomNode = bloomNode



const _bloomNode = ([...objProps.tempNode,
    'inputNode',
    'strength',
    'radius',
    'threshold',
    'smoothWidth',
] as const).distinct()
objProps.bloomNode = _bloomNode

export type BloomNodeProps = Node<BloomNode, typeof BloomNode, { inputNode: ENode, strength?: number, radius?: number, threshold?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bloomNode: Partial<{ inputNode: ENode, strength?: number, radius?: number, threshold?: number }>
    }
}

defaults.bloomNode = {}

