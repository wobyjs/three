import { Node } from '../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { Fog } from 'three/src/scenes/Fog.js'
export { Fog } from 'three/src/scenes/Fog.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Fog: typeof Fog
    }
}

Three.Fog = Fog

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fog: FogProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        fog: typeof fog
        fogBase: typeof fogBase
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        fog: typeof _fog
        fogBase: typeof _fogBase
    }
}



const fogBase = ([
    /**
     * Optional name of the `Fog` object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    'name',
    /**
     * Fog color.
     * @remarks If set to black, far away objects will be rendered black.
     */
    'color',
] as const).distinct()
consParams.fogBase = fogBase

/**
 * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
 *  @example
 * ```typescript
 * const scene = new THREE.Scene(,
 * scene.fog = new THREE.Fog(0xcccccc, 10, 15,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Fog Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js}
 */

const fog = ([
    /**
     * The color parameter is passed to the {@link THREE.Color} constructor to set the color property
     * @remarks
     * Color can be a hexadecimal integer or a css-style string.
     * @param color
     * @param near Expects a `Float`
     * @param far Expects a `Float`
     */
    'color',
    'near',
    'far',
] as const).distinct()
consParams.fog = fog



const _fogBase = ([
    /**
     * Optional name of the `Fog` object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    'name',
    /**
     * Fog color.
     * @remarks If set to black, far away objects will be rendered black.
     */
    'color',
] as const).distinct()
objProps.fogBase = _fogBase

/**
 * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
 *  @example
 * ```typescript
 * const scene = new THREE.Scene()
 * scene.fog = new THREE.Fog(0xcccccc, 10, 15)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Fog | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js | Source}
 */

const _fog = ([...objProps.fogBase,
    /**
     * Optional name of the object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    'name',
    /**
     * Fog color.
     * @remarks If set to black, far away objects will be rendered black.
     */
    'color',
    /**
     * The minimum distance to start applying fog.
     * @remarks Objects that are less than **near** units from the active camera won't be affected by fog.
     * @defaultValue `1`
     * @remarks Expects a `Float`
     */
    'near',
    /**
     * The maximum distance at which fog stops being calculated and applied.
     * @remarks Objects that are more than **far** units away from the active camera won't be affected by fog.
     * @defaultValue `1000`
     * @remarks Expects a `Float`
     */
    'far',
] as const).distinct()
objProps.fog = _fog


export type FogProps = Node<Fog, typeof Fog, { color: ColorRepresentation; near?: number; far?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        fog: Partial<{ color: ColorRepresentation; near?: number; far?: number; }>
    }
}

defaults.fog = {}

