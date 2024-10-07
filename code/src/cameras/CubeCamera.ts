import { Object3DNode } from '../../three-types'
import { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js'
import { CubeCamera } from 'three/src/cameras/CubeCamera.js'
export { CubeCamera } from 'three/src/cameras/CubeCamera.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        CubeCamera: typeof CubeCamera
    }
}

Three.CubeCamera = CubeCamera

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeCamera: CubeCameraProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        cubeCamera: typeof cubeCamera
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        cubeCamera: typeof _cubeCamera
    }
}


/**
 * Creates **6** {@link THREE.PerspectiveCamera} that render to a {@link THREE.WebGlCubeRenderTarget}.
 * @remarks The cameras are added to the {@link children} array.
 * @example
 * ```typescript
 * // Create cube render target
 * const cubeRenderTarget = new THREE.WebGlCubeRenderTarget( 128,
{ generateMipmaps, minFilter.LinearMipmapLinearFilter } ,
 *
 * // Create cube camera
 * const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget ,
 * scene.add( cubeCamera ,
 *
 * // Create car
 * const chromeMaterial = new THREE.MeshLambertMaterial( { color, envMap.texture } ,
 * const car = new THREE.Mesh( carGeometry, chromeMaterial ,
 * scene.add( car ,
 *
 * // Update the render target cube
 * car.visible = false,
 * cubeCamera.position.copy( car.position ,
 * cubeCamera.update( renderer, scene ,
 *
 * // Render the scene
 * car.visible = true,
 * renderer.render( scene, camera ,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic / cubemap / dynamic }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/CubeCamera Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/CubeCamera.js}
 */

const cubeCamera = ([
    /**
     * Constructs a {@link CubeCamera} that contains 6 {@link PerspectiveCamera} that render to a {@link THREE.WebGlCubeRenderTarget}.
     * @param near The near clipping distance.
     * @param far The far clipping distance.
     * @param renderTarget The destination cube render target.
     */
    'near',
    'far',
    'renderTarget',
] as const).distinct()
consParams.cubeCamera = cubeCamera


/**
 * Creates **6** {@link THREE.PerspectiveCamera | cameras} that render to a {@link THREE.webglCubeRenderTarget | WebGlCubeRenderTarget}.
 * @remarks The cameras are added to the {@link children} array.
 * @example
 * ```typescript
 * // Create cube render target
 * const cubeRenderTarget = new THREE.webglCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } )
 *
 * // Create cube camera
 * const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget )
 * scene.add( cubeCamera )
 *
 * // Create car
 * const chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeRenderTarget.texture } )
 * const car = new THREE.Mesh( carGeometry, chromeMaterial )
 * scene.add( car )
 *
 * // Update the render target cube
 * car.visible = false
 * cubeCamera.position.copy( car.position )
 * cubeCamera.update( renderer, scene )
 *
 * // Render the scene
 * car.visible = true
 * renderer.render( scene, camera )
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/CubeCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/CubeCamera.js | Source}
 */

const _cubeCamera = ([...objProps.object3d,
    /**
     * The destination cube render target.
     */
    'renderTarget',
    'coordinateSystem',
    'activeMipmapLevel',
] as const).distinct()
objProps.cubeCamera = _cubeCamera

export type CubeCameraProps = Object3DNode<CubeCamera, typeof CubeCamera, { near: number; far: number; renderTarget: WebGLCubeRenderTarget; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        cubeCamera: Partial<{ near: number; far: number; renderTarget: WebGLCubeRenderTarget; }>
    }
}

defaults.cubeCamera = {}

