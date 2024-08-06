import { Node } from '../../three-types'
import { Interpolant } from 'three/src/math/Interpolant.js'
export { Interpolant } from 'three/src/math/Interpolant.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        interpolant: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        interpolant: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Interpolant.d.ts

consParams.interpolant = [
    'parameterPositions',
    'sampleValues',
    'sampleSize',
    'resultBuffer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Interpolant.d.ts

objParams.interpolant = [
    'parameterPositions',
    'sampleValues',
    'valueSize',
    'resultBuffer',
].distinct()

export type InterpolantProps = Node<Interpolant, typeof Interpolant, { parameterPositions: any; sampleValues: any; sampleSize: number; resultBuffer?: any; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        interpolant: Partial<{ parameterPositions: any; sampleValues: any; sampleSize: number; resultBuffer?: any; }>
    }
}

defaults.interpolant = {}

