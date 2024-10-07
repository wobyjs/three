import { Node } from '../../../three-types'
import { DiscreteInterpolant } from 'three/src/math/interpolants/DiscreteInterpolant.js'
export { DiscreteInterpolant } from 'three/src/math/interpolants/DiscreteInterpolant.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        DiscreteInterpolant: typeof DiscreteInterpolant
    }
}

Three.DiscreteInterpolant = DiscreteInterpolant

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            discreteInterpolant: DiscreteInterpolantProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        discreteInterpolant: typeof discreteInterpolant
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        discreteInterpolant: typeof _discreteInterpolant
    }
}



const discreteInterpolant = ([
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
] as const).distinct()
consParams.discreteInterpolant = discreteInterpolant



const _discreteInterpolant = ([...objProps.interpolant,
] as const).distinct()
objProps.discreteInterpolant = _discreteInterpolant

export type DiscreteInterpolantProps = Node<DiscreteInterpolant, typeof DiscreteInterpolant, { parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        discreteInterpolant: Partial<{ parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.discreteInterpolant = {}

