import { Node } from '../../../three-types'
import { CubicInterpolant } from 'three/src/math/interpolants/CubicInterpolant.js'
export { CubicInterpolant } from 'three/src/math/interpolants/CubicInterpolant.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CubicInterpolant: typeof CubicInterpolant
    }
}

Three.CubicInterpolant = CubicInterpolant

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubicInterpolant: CubicInterpolantProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        cubicInterpolant: typeof cubicInterpolant
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        cubicInterpolant: typeof _cubicInterpolant
    }
}



const cubicInterpolant = ([
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
] as const).distinct()
consParams.cubicInterpolant = cubicInterpolant



const _cubicInterpolant = ([...objProps.interpolant,
] as const).distinct()
objProps.cubicInterpolant = _cubicInterpolant


export type CubicInterpolantProps = Node<CubicInterpolant, typeof CubicInterpolant, { parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cubicInterpolant: Partial<{ parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.cubicInterpolant = {}

