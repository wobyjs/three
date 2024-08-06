import { Node } from '../../../three-types'
import { DiscreteInterpolant } from 'three/src/math/interpolants/DiscreteInterpolant.js'
export { DiscreteInterpolant } from 'three/src/math/interpolants/DiscreteInterpolant.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        discreteInterpolant: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        discreteInterpolant: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\DiscreteInterpolant.d.ts

consParams.discreteInterpolant = [
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\DiscreteInterpolant.d.ts    

objParams.discreteInterpolant = [...objParams.interpolant,
].distinct()

export type DiscreteInterpolantProps = Node<DiscreteInterpolant, typeof DiscreteInterpolant, { parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        discreteInterpolant: Partial<{ parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.discreteInterpolant = {}

