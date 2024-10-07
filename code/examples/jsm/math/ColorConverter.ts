import { Node } from '../../../three-types'
import { HSL, CMYK } from 'three/examples/jsm/math/ColorConverter.js'
export * from 'three/examples/jsm/math/ColorConverter.js'

// import { Three } from '../../../lib/3/index'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        hsl: typeof hsl
        cmyk: typeof cmyk
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        hsl: typeof _hsl
        cmyk: typeof _cmyk
    }
}



const cmyk = ([
    'c',
    'm',
    'y',
    'k',
] as const).distinct()
consParams.cmyk = cmyk

const hsl = ([
    'h',
    's',
    'l',
] as const).distinct()
consParams.hsl = hsl

const _hsl = ([
    'h',
    's',
    'l',
] as const).distinct()
objProps.hsl = _hsl

const _cmyk = ([
    'c',
    'm',
    'y',
    'k',
] as const).distinct()
objProps.cmyk = _cmyk

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

