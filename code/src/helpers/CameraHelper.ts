import { Object3DNode } from '../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { CameraHelper } from 'three/src/helpers/CameraHelper.js'
export { CameraHelper } from 'three/src/helpers/CameraHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        CameraHelper: typeof CameraHelper
    }
}

Three.CameraHelper = CameraHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cameraHelper: CameraHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        cameraHelper: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        cameraHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\CameraHelper.d.ts
/**
 * This helps with visualizing what a camera contains in its frustum
 * @remarks
 * It visualizes the frustum of a camera using a {@link THREE.LineSegments}.
 * @remarks {@link CameraHelper} must be a child of the scene.
 * @example
 * ```typescript
 * const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000,
 * const helper = new THREE.CameraHelper(camera,
 * scene.add(helper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_camera / camera}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines / extrude / splines}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/CameraHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/CameraHelper.js}
 */

consParams.cameraHelper = [
    /**
     * The camera being visualized.
     */
    'camera',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\CameraHelper.d.ts
/**
 * This helps with visualizing what a camera contains in its frustum
 * @remarks
 * It visualizes the frustum of a camera using a {@link THREE.LineSegments | LineSegments}.
 * @remarks {@link CameraHelper} must be a child of the scene.
 * @example
 * ```typescript
 * const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
 * const helper = new THREE.CameraHelper(camera)
 * scene.add(helper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_camera | WebGl / camera}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGl / extrude / splines}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/CameraHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/CameraHelper.js | Source}
 */

objParams.cameraHelper = [...objParams.lineSegments,
    /**
     * The camera being visualized.
     */
    'camera',
    /**
     * This contains the points used to visualize the camera.
     */
    'pointMap',
    /**
     * Reference to the {@link THREE.Camera.matrixWorld | camera.matrixWorld}.
     */
    'matrix',
].distinct()

export type CameraHelperProps = Object3DNode<CameraHelper, typeof CameraHelper, { camera: Camera; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        cameraHelper: Partial<{ camera: Camera; }>
    }
}

defaults.cameraHelper = {}

