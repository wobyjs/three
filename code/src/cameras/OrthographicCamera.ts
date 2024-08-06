import { Object3DNode } from '../../three-types'
import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera.js'
export { OrthographicCamera } from 'three/src/cameras/OrthographicCamera.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Camera'

declare module '../../lib/3/three'
{
    interface Three {
        OrthographicCamera: typeof OrthographicCamera
    }
}

Three.OrthographicCamera = OrthographicCamera

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            orthographicCamera: OrthographicCameraProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        orthographicCamera: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        orthographicCamera: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\OrthographicCamera.d.ts
/**
 * Camera that uses {@link https://en.wikipedia.org/wiki/Orthographic_projection projection}.
 * In this.projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.
 * This can be useful for rendering 2D scenes and UI elements, amongst other things.
 * @example
 * ```typescript
 * const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000,
 * scene.add(camera,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_camera }
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho / cubes / ortho }
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic / cubemap / dynamic }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_advanced / advanced }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_dof2 / dof2 }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_godrays / godrays }
 * @see Example: {@link https://threejs.org/examples/#webgl_rtt }
 * @see Example: {@link https://threejs.org/examples/#webgl_shaders_tonemapping / tonemapping }
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmap }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js}
 */

consParams.orthographicCamera = [
    /**
     * Creates a new {@link OrthographicCamera}.
     * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum frustum}.
     * @param left Camera frustum left plane. Default `-1`.
     * @param right Camera frustum right plane. Default `1`.
     * @param top Camera frustum top plane. Default `1`.
     * @param bottom Camera frustum bottom plane. Default `-1`.
     * @param near Camera frustum near plane. Default `0.1`.
     * @param far Camera frustum far plane. Default `2000`.
     */
    'left',
    'right',
    'top',
    'bottom',
    'near',
    'far',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\OrthographicCamera.d.ts
/**
 * Camera that uses {@link https://en.wikipedia.org/wiki/Orthographic_projection | orthographic projection}.
 * In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.
 * This can be useful for rendering 2d scenes and UI elements, amongst other things.
 * @example
 * ```typescript
 * const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000)
 * scene.add(camera)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_camera | camera }
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | interactive / cubes / ortho }
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_advanced | postprocessing / advanced }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_dof2 | postprocessing / dof2 }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_godrays | postprocessing / godrays }
 * @see Example: {@link https://threejs.org/examples/#webgl_rtt | rtt }
 * @see Example: {@link https://threejs.org/examples/#webgl_shaders_tonemapping | shaders / tonemapping }
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmap | shadowmap }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js | Source}
 */

objParams.orthographicCamera = [...objParams.camera,
    /**
     * Gets or sets the zoom factor of the camera.
     * @defaultValue `1`
     */
    'zoom',
    /**
     * Set by {@link setViewOffset | .setViewOffset()}.
     * @defaultValue `null`
     */
    'view',
    /**
     * Camera frustum left plane.
     * @remarks Expects a `Float`
     * @defaultValue `-1`
     */
    'left',
    /**
     * Camera frustum right plane.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    'right',
    /**
     * Camera frustum top plane.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    'top',
    /**
     * Camera frustum bottom plane.
     * @remarks Expects a `Float`.
     * @defaultValue `-1`
     */
    'bottom',
    /**
     * Camera frustum near plane.`.
     * @remarks The valid range is between `0` and the current value of the {@link far | .far} plane.
     * @remarks Note that, unlike for the {@link THREE.PerspectiveCamera | PerspectiveCamera `0` is a valid value for an {@link THREE.OrthographicCamera | OrthographicCamera's} near plane.
     * @remarks Expects a `Float`
     * @defaultValue `0.1`
     */
    'near',
    /**
     * Camera frustum far plane.
     * @remarks Must be greater than the current value of {@link near | .near} plane.
     * @remarks Expects a `Float`
     * @defaultValue `2000`
     */
    'far',
].distinct()

export type OrthographicCameraProps = Object3DNode<OrthographicCamera, typeof OrthographicCamera, { left?: number; right?: number; top?: number; bottom?: number; near?: number; far?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        orthographicCamera: { left?: number; right?: number; top?: number; bottom?: number; near?: number; far?: number; }
    }
}

defaults.orthographicCamera = { left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 2000 }
