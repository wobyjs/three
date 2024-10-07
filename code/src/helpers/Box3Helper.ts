import { Object3DNode } from '../../three-types'
import { Box3 } from 'three/src/math/Box3.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { Box3Helper } from 'three/src/helpers/Box3Helper.js'
export { Box3Helper } from 'three/src/helpers/Box3Helper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Box3Helper: typeof Box3Helper
    }
}

Three.Box3Helper = Box3Helper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            box3Helper: Box3HelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        box3Helper: typeof box3Helper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        box3Helper: typeof _box3Helper
    }
}


/**
 * Helper object to visualize a {@link THREE.Box3}.
 * @example
 * ```typescript
 * const box = new THREE.Box3(,
 * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3),
 * const helper = new THREE.Box3Helper(box, 0xffff00,
 * scene.add(helper,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js}
 */

const box3Helper = ([
    /**
     * Creates a new wireframe box that represents the passed Box3.
     * @param box The Box3 to show.
     * @param color The box's color. Default `0xffff00`
     */
    'box',
    'color',
] as const).distinct()
consParams.box3Helper = box3Helper


/**
 * Helper object to visualize a {@link THREE.Box3 | Box3}.
 * @example
 * ```typescript
 * const box = new THREE.Box3()
 * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3))
 * const helper = new THREE.Box3Helper(box, 0xffff00)
 * scene.add(helper)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js | Source}
 */

const _box3Helper = ([...objProps.lineSegments,
    /**
     * The Box3 being visualized.
     */
    'box',
] as const).distinct()
objProps.box3Helper = _box3Helper

export type Box3HelperProps = Object3DNode<Box3Helper, typeof Box3Helper, { box: Box3; color?: ColorRepresentation; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        box3Helper: Partial<{ box: Box3; color?: ColorRepresentation; }>
    }
}

defaults.box3Helper = { color: 16776960 }
