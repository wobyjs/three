import { Object3DNode } from '../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
export { Camera } from 'three/src/cameras/Camera.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../core/Object3D'

declare module '../../lib/3/three'
{
    interface Three {
        Camera: typeof Camera
    }
}

Three.Camera = Camera

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            camera: CameraProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        camera: typeof camera
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        camera: typeof _camera
    }
}


/**
 * Abstract base class for cameras
 * @remarks
 * This class should always be inherited when you build a new camera.
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js}
 */

const camera = ([
] as const).distinct()
consParams.camera = camera


/**
 * Abstract base class for cameras
 * @remarks
 * This class should always be inherited when you build a new camera.
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js | Source}
 */

const _camera = ([...objProps.object3d,
    /**
     * @override
     * The {@link THREE.Layers | layers} that the {@link Camera} is a member of.
     * @remarks Objects must share at least one layer with the {@link Camera} to be n when the camera's viewpoint is rendered.
     * @defaultValue `new THREE.Layers()`
     */
    'layers',
    /**
     * This is the inverse of matrixWorld.
     * @remarks MatrixWorld contains the Matrix which has the world transform of the {@link Camera} .
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    'matrixWorldInverse',
    /**
     * This is the matrix which contains the projection.
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    'projectionMatrix',
    /**
     * This is the inverse of projectionMatrix.
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    'projectionMatrixInverse',
    'coordinateSystem',
    'viewport',
] as const).distinct()
objProps.camera = _camera

export type CameraProps = Object3DNode<Camera, typeof Camera, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        camera: {}
    }
}

defaults.camera = {}

