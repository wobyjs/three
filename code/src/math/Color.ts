import { Node, ColorArray } from '../../three-types'
import { Color, ColorRepresentation } from 'three/src/math/Color.js'
export { Color, ColorRepresentation } from 'three/src/math/Color.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        color: string[]
        hsl: string[]
        rgb: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        color: string[]
        hsl: string[]
        rgb: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Color.d.ts

consParams.hsl = [
    'h',
    's',
    'l',
].distinct()


consParams.rgb = [
    'r',
    'g',
    'b',
].distinct()

/**
 * Represents a color. See also {@link ColorUtils}.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
 *
 * @example
 * const color = new THREE.Color( 0xff0000 ,
 */

consParams.color = [
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
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Color.d.ts

objParams.rgb = [
    'r',
    'g',
    'b',
].distinct()

/**
 * Represents a color. See also {@link ColorUtils}.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
 *
 * @example
 * const color = new THREE.Color( 0xff0000 )
 */

objParams.color = [
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
].distinct()

export type ColorProps = Node<Color, ColorArray, { color?: ColorRepresentation; } | { r: number; g: number; b: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        color: { color?: ColorRepresentation; } | { r: number; g: number; b: number; }
    }
}

defaults.color = {}

