import { Node } from '../../../three-types'
import { ConvexObjectBreaker } from 'three/examples/jsm/misc/ConvexObjectBreaker.js'
export * from 'three/examples/jsm/misc/ConvexObjectBreaker.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        convexObjectBreaker: string[]
        cutByPlaneOutput: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        convexObjectBreaker: string[]
        cutByPlaneOutput: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ConvexObjectBreaker.d.ts

consParams.cutByPlaneOutput = [
    'object1',
    'object2',
].distinct()


consParams.convexObjectBreaker = [
    'minSizeForBreak',
    'smallDelta',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ConvexObjectBreaker.d.ts

objParams.cutByPlaneOutput = [
    'object1',
    'object2',
].distinct()


objParams.convexObjectBreaker = [
].distinct()

export type ConvexObjectBreakerProps = Node<ConvexObjectBreaker, typeof ConvexObjectBreaker, { minSizeForBreak?: number; smallDelta?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        convexObjectBreaker: { minSizeForBreak?: number; smallDelta?: number; }
    }
}

defaults.convexObjectBreaker = {}

