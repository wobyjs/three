import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import RTTNode, { RTTNodeOptions } from 'three/src/nodes/utils/RTTNode.js'
export { RTTNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../accessors/TextureNode'

declare module '../../../lib/3/three'
{
    interface Three {
        RTTNode: typeof RTTNode
    }
}

Three.RTTNode = RTTNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rttNode: RTTNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rttNode: typeof rttNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rttNode: typeof _rttNode
    }
}

const rttNode = ([
    'node',
    'width',
    'height',
    'options',
] as const).distinct()
consParams.rttNode = rttNode


const _rttNode = ([...objProps.textureNode,
    'node',
    'width',
    'height',
    'renderTarget',
    'textureNeedsUpdate',
    'autoUpdate',
    'pixelRatio',
] as const).distinct()
objProps.rttNode = _rttNode

export type RTTNodeProps = Node<RTTNode, typeof RTTNode, { node: ENode, width?: number | null, height?: number | null, options?: RTTNodeOptions }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rttNode: Partial<{ node: ENode, width?: number | null, height?: number | null, options?: RTTNodeOptions }>
    }
}

defaults.rttNode = {}


