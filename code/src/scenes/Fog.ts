import { Node } from '../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { Fog } from 'three/src/scenes/Fog.js'
export { Fog } from 'three/src/scenes/Fog.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        fog: string[]
        fogBase: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        fog: string[]
        fogBase: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\Fog.d.ts

consParams.fogBase = [
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
].distinct()

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

consParams.fog = [
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
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\Fog.d.ts

objParams.fogBase = [
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
].distinct()

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

objParams.fog = [...objParams.fogBase,
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
].distinct()


export type FogProps = Node<Fog, typeof Fog, { color: ColorRepresentation; near?: number; far?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        fog: Partial<{ color: ColorRepresentation; near?: number; far?: number; }>
    }
}

defaults.fog = {}

