import { Node, ColorArray } from '../../three-types'
import { Color, ColorRepresentation } from 'three/src/math/Color.js'
export * from 'three/src/math/Color.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Color: typeof Color
    }
}

Three.Color = Color

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            color: ColorProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        color: typeof color
        hsl: typeof hsl
        rgb: typeof rgb
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        color: typeof _color
        hsl: typeof _hsl
        rgb: typeof _rgb
    }
}



const hsl = ([
    'h',
    's',
    'l',
] as const).distinct()
consParams.hsl = hsl


const rgb = ([
    'r',
    'g',
    'b',
] as const).distinct()
consParams.rgb = rgb


/**
 * Represents a color. See also {@link ColorUtils}.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
 *
 * @example
 * const color = new THREE.Color( 0xff0000 ,
 */

const color = ([
    'color',
    /**
     * Red channel value between 0 and 1. Default is 1.
     * @default 1
     */
    'r',
    /**
     * Green channel value between 0 and 1. Default is 1.
     * @default 1
     */
    'g',
    /**
     * Blue channel value between 0 and 1. Default is 1.
     * @default 1
     */
    'b',
] as const).distinct()
consParams.color = color



const _rgb = ([
    'r',
    'g',
    'b',
] as const).distinct()
objProps.rgb = _rgb

const _hsl = ([
    'h',
    's',
    'l',
] as const).distinct()
objProps.hsl = _hsl

/**
 * Represents a color. See also {@link ColorUtils}.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
 *
 * @example
 * const color = new THREE.Color( 0xff0000 )
 */

const _color = ([
    /**
     * Red channel value between 0 and 1. Default is 1.
     * @default 1
     */
    'r',
    /**
     * Green channel value between 0 and 1. Default is 1.
     * @default 1
     */
    'g',
    /**
     * Blue channel value between 0 and 1. Default is 1.
     * @default 1
     */
    'b',
] as const).distinct()
objProps.color = _color

export type ColorProps = Node<Color, ColorArray, { color?: ColorRepresentation; } | { r: number; g: number; b: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        color: { color?: ColorRepresentation; } | { r: number; g: number; b: number; }
    }
}

defaults.color = {}

