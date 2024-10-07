import { Node } from '../../../three-types'
import NodeFrame from 'three/src/nodes/core/NodeFrame.js'
export { NodeFrame }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeFrame: typeof NodeFrame
    }
}

Three.NodeFrame = NodeFrame

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeFrame: NodeFrameProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeFrame: typeof nodeFrame
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeFrame: typeof _nodeFrame
    }
}



const nodeFrame = ([
] as const).distinct()
consParams.nodeFrame = nodeFrame



const _nodeFrame = ([
    'time',
    'deltaTime',
    'frameId',
    'renderId',
    'startTime',
    'frameMap',
    'frameBeforeMap',
    'renderMap',
    'renderBeforeMap',
    'renderer',
    'material',
    'camera',
    'object',
    'scene',
] as const).distinct()
objProps.nodeFrame = _nodeFrame

export type NodeFrameProps = Node<NodeFrame, typeof NodeFrame, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFrame: {}
    }
}

defaults.nodeFrame = {}

