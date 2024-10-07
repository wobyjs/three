import { Node } from '../../../three-types'
import { Lut } from 'three/examples/jsm/math/Lut.js'
export * from 'three/examples/jsm/math/Lut.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        lut: typeof lut
        colorMapKeywords: typeof colorMapKeywords
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lut: typeof _lut
        colorMapKeywords: typeof _colorMapKeywords
    }
}



const lut = ([
    'colormap',
    'numberofcolors',
] as const).distinct()
consParams.lut = lut



const _lut = ([
    'lut',
    'map',
    'n',
    'minV',
    'maxV',
] as const).distinct()
objProps.lut = _lut


const colorMapKeywords = ([
    'rainbow',
    'cooltowarm',
    'blackbody',
    'grayscale',
] as const).distinct()
consParams.colorMapKeywords = colorMapKeywords


const _colorMapKeywords = ([
    'rainbow',
    'cooltowarm',
    'blackbody',
    'grayscale',
] as const).distinct()
objProps.colorMapKeywords = _colorMapKeywords

export type LutProps = Node<Lut, typeof Lut, { colormap?: string; numberofcolors?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lut: Partial<{ colormap?: string; numberofcolors?: number; }>
    }
}

defaults.lut = { colormap: 'rainbow', numberofcolors: 32 }