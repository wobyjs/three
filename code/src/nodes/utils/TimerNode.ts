import { Node } from '../../../three-types'
import TimerNode, { TimerNodeScope } from 'three/src/nodes/utils/TimerNode.js'
export { TimerNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        timerNode: typeof timerNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        timerNode: typeof _timerNode
    }
}



const timerNode = ([
    'scope',
    'scale',
    'value',
] as const).distinct()
consParams.timerNode = timerNode



const _timerNode = ([...objProps.uniformNode,
    'scope',
    'scale',
] as const).distinct()
objProps.timerNode = _timerNode

export type TimerNodeProps = Node<TimerNode, typeof TimerNode, { scope?: TimerNodeScope; scale?: number; value?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        timerNode: Partial<{ scope?: TimerNodeScope; scale?: number; value?: number; }>
    }
}

defaults.timerNode = {}

