import { Node } from '../../../three-types'
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js'
export * from 'three/examples/jsm/math/SimplexNoise.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        simplexNoise: typeof simplexNoise
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        simplexNoise: typeof _simplexNoise
    }
}



const simplexNoise = ([
    'r',
] as const).distinct()
consParams.simplexNoise = simplexNoise



const _simplexNoise = ([
] as const).distinct()
objProps.simplexNoise = _simplexNoise

export type SimplexNoiseProps = Node<SimplexNoise, typeof SimplexNoise, { r?: object; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        simplexNoise: Partial<{ r?: object; }>
    }
}

defaults.simplexNoise = {}

