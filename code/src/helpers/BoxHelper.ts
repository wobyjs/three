import { Object3DNode } from '../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { BoxHelper } from 'three/src/helpers/BoxHelper.js'
export { BoxHelper } from 'three/src/helpers/BoxHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        BoxHelper: typeof BoxHelper
    }
}

Three.BoxHelper = BoxHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            boxHelper: BoxHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        boxHelper: typeof boxHelper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        boxHelper: typeof _boxHelper
    }
}


/**
 * Helper object to graphically show the world-axis-aligned bounding box around an object
 * @remarks
 * The actual bounding box is handled with {@link THREE.Box3 this.is just a visual helper for debugging
 * It can be automatically resized with the {@link THREE.BoxHelper.update.update} method when the object it's created from is transformed
 * Note that the object must have a {@link THREE.BufferGeometry} for this.to work, so it won't work with {@link Sprite}.
 * @example
 * ```typescript
 * const sphere = new THREE.SphereGeometry(,
 * const object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000),
 * const box = new THREE.BoxHelper(object, 0xffff00,
 * scene.add(box,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers / helpers}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd / loader / nrrd}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_drawrange / buffergeometry / drawrange}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/BoxHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/BoxHelper.js}
 */

const boxHelper = ([
    /**
     * Creates a new wireframe box that bounds the passed object
     * @remarks
     * Internally this.uses {@link THREE.Box3.setFromObject.setFromObject} to calculate the dimensions
     * Note that this.includes any children.
     * @param object The object3d to show the world-axis-aligned bounding box.
     * @param color Hexadecimal value that defines the box's color. Default `0xffff00`
     */
    'object',
    'color',
] as const).distinct()
consParams.boxHelper = boxHelper


/**
 * Helper object to graphically show the world-axis-aligned bounding box around an object
 * @remarks
 * The actual bounding box is handled with {@link THREE.Box3 | Box3 this is just a visual helper for debugging
 * It can be automatically resized with the {@link THREE.BoxHelper.update | BoxHelper.update} method when the object it's created from is transformed
 * Note that the object must have a {@link THREE.BufferGeometry | BufferGeometry} for this to work, so it won't work with {@link Sprite | Sprites}.
 * @example
 * ```typescript
 * const sphere = new THREE.SphereGeometry()
 * const object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000))
 * const box = new THREE.BoxHelper(object, 0xffff00)
 * scene.add(box)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGl / helpers}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGl / loader / nrrd}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_drawrange | WebGl / buffergeometry / drawrange}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/BoxHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/BoxHelper.js | Source}
 */

const _boxHelper = ([...objProps.lineSegments,
] as const).distinct()
objProps.boxHelper = _boxHelper

export type BoxHelperProps = Object3DNode<BoxHelper, typeof BoxHelper, { object: Object3D; color?: ColorRepresentation; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        boxHelper: Partial<{ object: Object3D; color?: ColorRepresentation; }>
    }
}

defaults.boxHelper = { color: 16776960 }
