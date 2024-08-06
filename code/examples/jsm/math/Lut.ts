import { Node } from '../../../three-types'
import { Lut } from 'three/examples/jsm/math/Lut.js'
export * from 'three/examples/jsm/math/Lut.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Lut: typeof Lut
    }
}

Three.Lut = Lut

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lut: LutProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lut: string[]
        colorMapKeywords: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lut: string[]
        colorMapKeywords: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Lut.d.ts

consParams.lut = [
    'colormap',
    'numberofcolors',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Lut.d.ts

objParams.lut = [
    'lut',
    'map',
    'n',
    'minV',
    'maxV',
].distinct()


consParams.colorMapKeywords = [
    'rainbow',
    'cooltowarm',
    'blackbody',
    'grayscale',
].distinct()


objParams.colorMapKeywords = [
    'rainbow',
    'cooltowarm',
    'blackbody',
    'grayscale',
].distinct()

export type LutProps = Node<Lut, typeof Lut, { colormap?: string; numberofcolors?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lut: Partial<{ colormap?: string; numberofcolors?: number; }>
    }
}

defaults.lut = { colormap: 'rainbow', numberofcolors: 32 }