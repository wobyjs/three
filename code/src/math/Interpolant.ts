import { Node } from '../../three-types'
import { Interpolant } from 'three/src/math/Interpolant.js'
export { Interpolant } from 'three/src/math/Interpolant.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Interpolant: typeof Interpolant
    }
}

Three.Interpolant = Interpolant

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            interpolant: InterpolantProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        interpolant: typeof interpolant
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        interpolant: typeof _interpolant
    }
}



const interpolant = ([
    'parameterPositions',
    'sampleValues',
    'sampleSize',
    'resultBuffer',
] as const).distinct()
consParams.interpolant = interpolant



const _interpolant = ([
    'parameterPositions',
    'sampleValues',
    'valueSize',
    'resultBuffer',
] as const).distinct()
objProps.interpolant = _interpolant

export type InterpolantProps = Node<Interpolant, typeof Interpolant, { parameterPositions: any; sampleValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        interpolant: Partial<{ parameterPositions: any; sampleValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.interpolant = {}

