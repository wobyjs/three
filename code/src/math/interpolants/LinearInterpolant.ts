import { Node } from '../../../three-types'
import { LinearInterpolant } from 'three/src/math/interpolants/LinearInterpolant.js'
export { LinearInterpolant } from 'three/src/math/interpolants/LinearInterpolant.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LinearInterpolant: typeof LinearInterpolant
    }
}

Three.LinearInterpolant = LinearInterpolant

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            linearInterpolant: LinearInterpolantProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        linearInterpolant: typeof linearInterpolant
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        linearInterpolant: typeof _linearInterpolant
    }
}



const linearInterpolant = ([
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
] as const).distinct()
consParams.linearInterpolant = linearInterpolant



const _linearInterpolant = ([...objProps.interpolant,
] as const).distinct()
objProps.linearInterpolant = _linearInterpolant

export type LinearInterpolantProps = Node<LinearInterpolant, typeof LinearInterpolant, { parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        linearInterpolant: Partial<{ parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.linearInterpolant = {}

