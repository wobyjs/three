import { Node } from '../../../three-types'
import { CubicInterpolant } from 'three/src/math/interpolants/CubicInterpolant.js'
export { CubicInterpolant } from 'three/src/math/interpolants/CubicInterpolant.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        cubicInterpolant: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        cubicInterpolant: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\CubicInterpolant.d.ts

consParams.cubicInterpolant = [
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\CubicInterpolant.d.ts    

objParams.cubicInterpolant = [...objParams.interpolant,
].distinct()


export type CubicInterpolantProps = Node<CubicInterpolant, typeof CubicInterpolant, { parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cubicInterpolant: Partial<{ parameterPositions: any; samplesValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.cubicInterpolant = {}

