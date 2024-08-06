import { Object3DNode } from '../../three-types'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js'
export { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Camera'

declare module '../../lib/3/three'
{
    interface Three {
        PerspectiveCamera: typeof PerspectiveCamera
    }
}

Three.PerspectiveCamera = PerspectiveCamera

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            perspectiveCamera: PerspectiveCameraProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        perspectiveCamera: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        perspectiveCamera: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\PerspectiveCamera.d.ts
/**
 * Camera that uses {@link https://en.wikipedia.org/wiki/Perspective_(graphical) projection}.
 * This projection mode is designed to mimic the way the human eye sees
 * @remarks
 * It is the most common projection mode used for rendering a 3d scene.
 * @example
 * ```typescript
 * const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000,
 * scene.add(camera,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending / skinning / blending }
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph / skinning / morph }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo / stereo }
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes / cubes }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_skinning / collada / skinning }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js}
 */

consParams.perspectiveCamera = [
    /**
     * Creates a new {@link PerspectiveCamera}.
     * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum frustum}.
     * @param fov Camera frustum vertical field of view. Default `50`.
     * @param aspect Camera frustum aspect ratio. Default `1`.
     * @param near Camera frustum near plane. Default `0.1`.
     * @param far Camera frustum far plane. Default `2000`.
     */
    'fov',
    'aspect',
    'near',
    'far',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\PerspectiveCamera.d.ts
/**
 * Camera that uses {@link https://en.wikipedia.org/wiki/Perspective_(graphical) | perspective projection}.
 * This projection mode is designed to mimic the way the human eye sees
 * @remarks
 * It is the most common projection mode used for rendering a 3d scene.
 * @example
 * ```typescript
 * const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
 * scene.add(camera)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | animation / skinning / morph }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | interactive / cubes }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_skinning | loader / collada / skinning }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js | Source}
 */

objParams.perspectiveCamera = [...objParams.camera,
    /**
  * Gets or sets the zoom factor of the camera.
  * @defaultValue `1`
  */
    'zoom',
    /**
     * Camera frustum vertical field of view, from bottom to top of view, in degrees.
     * @remarks Expects a `Float`
     * @defaultValue `50`
     */
    'fov',
    /**
     * Camera frustum aspect ratio, usually the canvas width / canvas height.
     * @remarks Expects a `Float`
     * @defaultValue `1`, _(square canvas)_.
     */
    'aspect',
    /**
     * Camera frustum near plane.
     * @remarks The valid range is greater than `0` and less than the current value of the {@link far | .far} plane.
     * @remarks Note that, unlike for the {@link THREE.OrthographicCamera | OrthographicCamera `0` is **not** a valid value for a {@link PerspectiveCamera |PerspectiveCamera's}. near plane.
     * @defaultValue `0.1`
     * @remarks Expects a `Float`
     */
    'near',
    /**
     * Camera frustum far plane.
     * @remarks Must be greater than the current value of {@link near | .near} plane.
     * @remarks Expects a `Float`
     * @defaultValue `2000`
     */
    'far',
    /**
     * Object distance used for stereoscopy and depth-of-field effects.
     * @remarks This parameter does not influence the projection matrix unless a {@link THREE.StereoCamera | StereoCamera} is being used.
     * @remarks Expects a `Float`
     * @defaultValue `10`
     */
    'focus',
    /**
     * Frustum window specification or null.
     * This is set using the {@link setViewOffset | .setViewOffset} method and cleared using {@link clearViewOffset | .clearViewOffset}.
     * @defaultValue `null`
     */
    'view',
    /**
     * Film size used for the larger axis.
     * This parameter does not influence the projection matrix unless {@link filmOffset | .filmOffset} is set to a nonzero value.
     * @remarks Expects a `Float`
     * @defaultValue `35`, _millimeters_.
     */
    'filmGauge',
    /**
     * Horizontal off-center offset in the same unit as {@link filmGauge | .filmGauge}.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'filmOffset',
].distinct()

export type PerspectiveCameraProps = Object3DNode<PerspectiveCamera, typeof PerspectiveCamera, { fov?: number; aspect?: number; near?: number; far?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        perspectiveCamera: { fov?: number; aspect?: number; near?: number; far?: number; }
    }
}

defaults.perspectiveCamera = { fov: 50, aspect: 1, near: 0.1, far: 2000 }


