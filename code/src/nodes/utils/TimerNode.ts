import { Node } from '../../../three-types'
import TimerNode, { TimerNodeScope } from 'three/src/nodes/utils/TimerNode.js'
export { TimerNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../accessors/UniformsNode'

declare module '../../../lib/3/three'
{
    interface Three {
        TimerNode: typeof TimerNode
    }
}

Three.TimerNode = TimerNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            timerNode: TimerNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        timerNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        timerNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TimerNode.d.ts

consParams.timerNode = [
    'scope',
    'scale',
    'value',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TimerNode.d.ts    

objParams.timerNode = [...objParams.uniformNode,
    'scope',
    'scale',
].distinct()

export type TimerNodeProps = Node<TimerNode, typeof TimerNode, { scope?: TimerNodeScope; scale?: number; value?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        timerNode: Partial<{ scope?: TimerNodeScope; scale?: number; value?: number; }>
    }
}

defaults.timerNode = {}

