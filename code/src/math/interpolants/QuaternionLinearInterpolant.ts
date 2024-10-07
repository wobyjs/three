import { Node } from '../../../three-types'
import { QuaternionLinearInterpolant } from 'three/src/math/interpolants/QuaternionLinearInterpolant.js'
export { QuaternionLinearInterpolant } from 'three/src/math/interpolants/QuaternionLinearInterpolant.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../Interpolant'

declare module '../../../lib/3/three'
{
    interface Three {
        QuaternionLinearInterpolant: typeof QuaternionLinearInterpolant
    }
}

Three.QuaternionLinearInterpolant = QuaternionLinearInterpolant

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quaternionLinearInterpolant: QuaternionLinearInterpolantProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        quaternionLinearInterpolant: typeof quaternionLinearInterpolant
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        quaternionLinearInterpolant: typeof _quaternionLinearInterpolant
    }
}



const quaternionLinearInterpolant = ([
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
] as const).distinct()
consParams.quaternionLinearInterpolant = quaternionLinearInterpolant



const _quaternionLinearInterpolant = ([...objProps.interpolant,
] as const).distinct()
objProps.quaternionLinearInterpolant = _quaternionLinearInterpolant

export type QuaternionLinearInterpolantProps = Node<QuaternionLinearInterpolant, typeof QuaternionLinearInterpolant, { parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        quaternionLinearInterpolant: Partial<{ parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.quaternionLinearInterpolant = {}

