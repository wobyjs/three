import { Node } from '../../../three-types'
import { QuaternionLinearInterpolant } from 'three/src/math/interpolants/QuaternionLinearInterpolant.js'
export { QuaternionLinearInterpolant } from 'three/src/math/interpolants/QuaternionLinearInterpolant.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        quaternionLinearInterpolant: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        quaternionLinearInterpolant: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\QuaternionLinearInterpolant.d.ts

consParams.quaternionLinearInterpolant = [
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\QuaternionLinearInterpolant.d.ts    

objParams.quaternionLinearInterpolant = [...objParams.interpolant,
].distinct()

export type QuaternionLinearInterpolantProps = Node<QuaternionLinearInterpolant, typeof QuaternionLinearInterpolant, { parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        quaternionLinearInterpolant: Partial<{ parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.quaternionLinearInterpolant = {}

