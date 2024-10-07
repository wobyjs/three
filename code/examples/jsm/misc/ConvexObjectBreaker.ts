import { Node } from '../../../three-types'
import { ConvexObjectBreaker } from 'three/examples/jsm/misc/ConvexObjectBreaker.js'
export * from 'three/examples/jsm/misc/ConvexObjectBreaker.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ConvexObjectBreaker: typeof ConvexObjectBreaker
    }
}

Three.ConvexObjectBreaker = ConvexObjectBreaker

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convexObjectBreaker: ConvexObjectBreakerProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        convexObjectBreaker: typeof convexObjectBreaker
        cutByPlaneOutput: typeof cutByPlaneOutput
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        convexObjectBreaker: typeof _convexObjectBreaker
        cutByPlaneOutput: typeof _cutByPlaneOutput
    }
}



const cutByPlaneOutput = ([
    'object1',
    'object2',
] as const).distinct()
consParams.cutByPlaneOutput = cutByPlaneOutput


const convexObjectBreaker = ([
    'minSizeForBreak',
    'smallDelta',
] as const).distinct()
consParams.convexObjectBreaker = convexObjectBreaker



const _cutByPlaneOutput = ([
    'object1',
    'object2',
] as const).distinct()
objProps.cutByPlaneOutput = _cutByPlaneOutput


const _convexObjectBreaker = ([
] as const).distinct()
objProps.convexObjectBreaker = _convexObjectBreaker

export type ConvexObjectBreakerProps = Node<ConvexObjectBreaker, typeof ConvexObjectBreaker, { minSizeForBreak?: number; smallDelta?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        convexObjectBreaker: { minSizeForBreak?: number; smallDelta?: number; }
    }
}

defaults.convexObjectBreaker = {}

