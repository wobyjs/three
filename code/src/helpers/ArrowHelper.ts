import { Object3DNode, Vector3 } from '../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { ArrowHelper } from 'three/src/helpers/ArrowHelper.js'
export { ArrowHelper } from 'three/src/helpers/ArrowHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../../src/core/Object3D'

declare module '../../lib/3/three'
{
    interface Three {
        ArrowHelper: typeof ArrowHelper
    }
}

Three.ArrowHelper = ArrowHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arrowHelper: ArrowHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        arrowHelper: typeof arrowHelper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        arrowHelper: typeof _arrowHelper
    }
}


/**
 * An 3d arrow object for visualizing directions.
 * @example
 * ```typescript
 * const dir = new THREE.Vector3(1, 2, 0,
 * //normalize the direction vector (convert to vector of length 1)
 * dir.normalize(,
 * const origin = new THREE.Vector3(0, 0, 0,
 * const length = 1,
 * const hex = 0xffff00,
 * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex,
 * scene.add(arrowHelper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh / shadowmesh}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js}
 */

const arrowHelper = ([
    /**
     * Create a new instance of {@link ArrowHelper}
     * @param dir Direction from origin. Must be a unit vector. Default `new THREE.Vector3(0, 0, 1)`
     * @param origin Point at which the arrow starts. Default `new THREE.Vector3(0, 0, 0)`
     * @param length Length of the arrow. Default `1`
     * @param hex Hexadecimal value to define color. Default `0xffff00`
     * @param headLength The length of the head of the arrow. Default `0.2 * length`
     * @param headWidth The width of the head of the arrow. Default `0.2 * headLength`
     */

    'dir',
    'origin',
    'length',
    'color',
    'headLength',
    'headWidth',
] as const).distinct()
consParams.arrowHelper = arrowHelper


/**
 * An 3d arrow object for visualizing directions.
 * @example
 * ```typescript
 * const dir = new THREE.Vector3(1, 2, 0)
 * //normalize the direction vector (convert to vector of length 1)
 * dir.normalize()
 * const origin = new THREE.Vector3(0, 0, 0)
 * const length = 1
 * const hex = 0xffff00
 * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex)
 * scene.add(arrowHelper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh | WebGl / shadowmesh}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js | Source}
 */

const _arrowHelper = ([...objProps.object3d,
    /**
     * Contains the line part of the arrowHelper.
     */
    'line',
    /**
     * Contains the cone part of the arrowHelper.
     */
    'cone',
] as const).distinct()
objProps.arrowHelper = _arrowHelper

export type ArrowHelperProps = Object3DNode<ArrowHelper, typeof ArrowHelper, { dir?: Vector3; origin?: Vector3; length?: number; color?: ColorRepresentation; headLength?: number; headWidth?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        arrowHelper: { dir?: Vector3; origin?: Vector3; length?: number; color?: ColorRepresentation; headLength?: number; headWidth?: number; }
    }
}

defaults.arrowHelper = { length: 1, color: 16776960, get headLength() { return 0.2 * this.length }, get headWidth() { return 0.2 * this.headLength }, }
