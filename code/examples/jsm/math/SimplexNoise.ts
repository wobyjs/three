import { Node } from '../../../three-types'
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js'
export * from 'three/examples/jsm/math/SimplexNoise.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        SimplexNoise: typeof SimplexNoise
    }
}

Three.SimplexNoise = SimplexNoise

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            simplexNoise: SimplexNoiseProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        simplexNoise: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        simplexNoise: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\SimplexNoise.d.ts

consParams.simplexNoise = [
    'r',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\SimplexNoise.d.ts

objParams.simplexNoise = [
].distinct()

export type SimplexNoiseProps = Node<SimplexNoise, typeof SimplexNoise, { r?: object; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        simplexNoise: Partial<{ r?: object; }>
    }
}

defaults.simplexNoise = {}

