import { Node } from '../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { FogExp2 } from 'three/src/scenes/FogExp2.js'
export { FogExp2 } from 'three/src/scenes/FogExp2.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Fog'

declare module '../../lib/3/three'
{
    interface Three {
        FogExp2: typeof FogExp2
    }
}

Three.FogExp2 = FogExp2

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogExp2: FogExp2Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        fogExp2: typeof fogExp2
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        fogExp2: typeof _fogExp2
    }
}


/**
 * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
 * @example
 * ```typescript
 * const scene = new THREE.Scene(,
 * scene.fog = new THREE.FogExp2(0xcccccc, 0.002,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain geometry terrain}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js}
 */

const fogExp2 = ([
    /**
     * The color parameter is passed to the {@link THREE.Color} constructor to set the color property
     * @remarks Color can be a hexadecimal integer or a css-style string.
     * @param color
     * @param density Expects a `Float`
     */
    'color',
    'density',
] as const).distinct()
consParams.fogExp2 = fogExp2


/**
 * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
 * @example
 * ```typescript
 * const scene = new THREE.Scene()
 * scene.fog = new THREE.FogExp2(0xcccccc, 0.002)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain | webgl geometry terrain}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js | Source}
 */

const _fogExp2 = ([...objProps.fogBase,
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
     * Defines how fast the fog will grow dense.
     * @defaultValue `0.00025`
     * @remarks Expects a `Float`
     */
    'density',
] as const).distinct()
objProps.fogExp2 = _fogExp2

export type FogExp2Props = Node<FogExp2, typeof FogExp2, { color: ColorRepresentation; density?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        fogExp2: Partial<{ color: ColorRepresentation; density?: number; }>
    }
}

defaults.fogExp2 = {}

