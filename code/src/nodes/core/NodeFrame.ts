import { Node } from '../../../three-types'
import NodeFrame from 'three/src/nodes/core/NodeFrame.js'
export { NodeFrame }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        nodeFrame: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeFrame: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFrame.d.ts

consParams.nodeFrame = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFrame.d.ts

objParams.nodeFrame = [
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
].distinct()

export type NodeFrameProps = Node<NodeFrame, typeof NodeFrame, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFrame: {}
    }
}

defaults.nodeFrame = {}

