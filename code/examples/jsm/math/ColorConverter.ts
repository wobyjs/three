import { Node } from '../../../three-types'
import { HSL, CMYK } from 'three/examples/jsm/math/ColorConverter.js'
export * from 'three/examples/jsm/math/ColorConverter.js'

// import { Three } from '../../../lib/3/index'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        HSL: HSL,
        CMYK: CMYK,
    }
}

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hsl: HSL,
            cmyk: CMYK,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        hsl: string[]
        cmyk: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        hsl: string[]
        cmyk: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ColorConverter.d.ts

consParams.cmyk = [
    'c',
    'm',
    'y',
    'k',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ColorConverter.d.ts

objParams.hsl = [
    'h',
    's',
    'l',
].distinct()

objParams.cmyk = [
    'c',
    'm',
    'y',
    'k',
].distinct()

export type HSLProps = Node<HSL, HSL, { h: number; s: number; l: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        hsl: Partial<{ h: number; s: number; l: number; }>
    }
}

defaults.hsl = {}

export type CMYKProps = Node<CMYK, CMYK, { c: number; m: number; y: number; k: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cmyk: Partial<{ c: number; m: number; y: number; k: number; }>
    }
}

defaults.cmyk = {}

