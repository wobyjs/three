import { Node } from '../../../three-types'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'
export * from 'three/examples/jsm/math/ImprovedNoise.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ImprovedNoise: typeof ImprovedNoise
    }
}

Three.ImprovedNoise = ImprovedNoise

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            improvedNoise: ImprovedNoiseProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        improvedNoise: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        improvedNoise: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ImprovedNoise.d.ts

consParams.improvedNoise = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ImprovedNoise.d.ts

objParams.improvedNoise = [
].distinct()

export type ImprovedNoiseProps = Node<ImprovedNoise, typeof ImprovedNoise, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        improvedNoise: Partial<{}>
    }
}

defaults.improvedNoise = {}

