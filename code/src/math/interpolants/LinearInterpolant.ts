import { Node } from '../../../three-types'
import { LinearInterpolant } from 'three/src/math/interpolants/LinearInterpolant.js'
export { LinearInterpolant } from 'three/src/math/interpolants/LinearInterpolant.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        linearInterpolant: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        linearInterpolant: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\LinearInterpolant.d.ts

consParams.linearInterpolant = [
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\LinearInterpolant.d.ts    

objParams.linearInterpolant = [...objParams.interpolant,
].distinct()

export type LinearInterpolantProps = Node<LinearInterpolant, typeof LinearInterpolant, { parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        linearInterpolant: Partial<{ parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.linearInterpolant = {}

