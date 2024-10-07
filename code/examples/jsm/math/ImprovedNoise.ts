import { Node } from '../../../three-types'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'
export * from 'three/examples/jsm/math/ImprovedNoise.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ImprovedNoise: typeof ImprovedNoise
    }
}

Three.ImprovedNoise = ImprovedNoise

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            improvedNoise: ImprovedNoiseProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        improvedNoise: typeof improvedNoise
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        improvedNoise: typeof _improvedNoise
    }
}



const improvedNoise = ([
] as const).distinct()
consParams.improvedNoise = improvedNoise



const _improvedNoise = ([
] as const).distinct()
objProps.improvedNoise = _improvedNoise

export type ImprovedNoiseProps = Node<ImprovedNoise, typeof ImprovedNoise, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        improvedNoise: Partial<{}>
    }
}

defaults.improvedNoise = {}

