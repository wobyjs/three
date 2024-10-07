import { Node } from '../../three-types'
import { DirectionalLightShadow } from 'three/src/lights/DirectionalLightShadow.js'
export { DirectionalLightShadow } from 'three/src/lights/DirectionalLightShadow.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './LightShadow'

declare module '../../lib/3/three'
{
    interface Three {
        DirectionalLightShadow: typeof DirectionalLightShadow
    }
}

Three.DirectionalLightShadow = DirectionalLightShadow

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            directionalLightShadow: DirectionalLightShadowProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        directionalLightShadow: typeof directionalLightShadow
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        directionalLightShadow: typeof _directionalLightShadow
    }
}


/**
 * This is used internally by {@link DirectionalLight} for calculating shadows.
 * Unlike the other shadow classes, this.uses an {@link THREE.OrthographicCamera} to calculate the shadows,
 * rather than a {@link THREE.PerspectiveCamera}
 * @remarks
 * This is because light rays from a {@link THREE.DirectionalLight} are parallel.
 * @example
 * ```typescript
 * //Create a WebGlRenderer and turn on shadows in the renderer
 * const renderer = new THREE.WebGlRenderer(,
 * renderer.shadowMap.enabled = true,
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap, // default THREE.PCFShadowMap
 * //Create a DirectionalLight and turn on shadows for the light
 * const light = new THREE.DirectionalLight(0xffffff, 1,
 * light.position.set(0, 1, 0, //default, light shining from top
 * light.castShadow = true, // default false
 * scene.add(light,
 * //Set up shadow properties for the light
 * light.shadow.mapSize.width = 512, // default
 * light.shadow.mapSize.height = 512, // default
 * light.shadow.camera.near = 0.5, // default
 * light.shadow.camera.far = 500, // default
 * //Create a sphere that cast shadows (but does not receive them)
 * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32,
 * const sphereMaterial = new THREE.MeshStandardMaterial({
 * color
 * 
 * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial,
 * sphere.castShadow = true, //default is false
 * sphere.receiveShadow = false, //default
 * scene.add(sphere,
 * //Create a plane that receives shadows (but does not cast them)
 * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32,
 * const planeMaterial = new THREE.MeshStandardMaterial({
 * color
 * })
 * const plane = new THREE.Mesh(planeGeometry, planeMaterial,
 * plane.receiveShadow = true,
 * scene.add(plane,
 * //Create a helper for the shadow camera (optional)
 * const helper = new THREE.CameraHelper(light.shadow.camera,
 * scene.add(helper,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/DirectionalLightShadow Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLightShadow.js}
 */

const directionalLightShadow = ([
] as const).distinct()
consParams.directionalLightShadow = directionalLightShadow


/**
 * This is used internally by {@link DirectionalLight | DirectionalLights} for calculating shadows.
 * Unlike the other shadow classes, this uses an {@link THREE.OrthographicCamera | OrthographicCamera} to calculate the shadows,
 * rather than a {@link THREE.PerspectiveCamera | PerspectiveCamera}
 * @remarks
 * This is because light rays from a {@link THREE.DirectionalLight | DirectionalLight} are parallel.
 * @example
 * ```typescript
 * //Create a WebGlRenderer and turn on shadows in the renderer
 * const renderer = new THREE.webglRenderer()
 * renderer.shadowMap.enabled = true
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
 * //Create a DirectionalLight and turn on shadows for the light
 * const light = new THREE.DirectionalLight(0xffffff, 1)
 * light.position.set(0, 1, 0); //default; light shining from top
 * light.castShadow = true; // default false
 * scene.add(light)
 * //Set up shadow properties for the light
 * light.shadow.mapSize.width = 512; // default
 * light.shadow.mapSize.height = 512; // default
 * light.shadow.camera.near = 0.5; // default
 * light.shadow.camera.far = 500; // default
 * //Create a sphere that cast shadows (but does not receive them)
 * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32)
 * const sphereMaterial = new THREE.MeshStandardMaterial({
 *     color: 0xff0000
 * })
 * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
 * sphere.castShadow = true; //default is false
 * sphere.receiveShadow = false; //default
 * scene.add(sphere)
 * //Create a plane that receives shadows (but does not cast them)
 * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32)
 * const planeMaterial = new THREE.MeshStandardMaterial({
 *     color: 0x00ff00
 * })
 * const plane = new THREE.Mesh(planeGeometry, planeMaterial)
 * plane.receiveShadow = true
 * scene.add(plane)
 * //Create a helper for the shadow camera (optional)
 * const helper = new THREE.CameraHelper(light.shadow.camera)
 * scene.add(helper)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/DirectionalLightShadow | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLightShadow.js | Source}
 */

const _directionalLightShadow = ([...objProps.lightShadow,
    /**
     * The light's view of the world.
     * @remarks This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
     * @defaultValue is an {@link THREE.OrthographicCamera | OrthographicCamera} with
     * {@link OrthographicCamera.left | left} and {@link OrthographicCamera.bottom | bottom} set to -5,
     * {@link OrthographicCamera.right | right} and {@link OrthographicCamera.top | top} set to 5,
     * the {@link OrthographicCamera.near | near} clipping plane at 0.5 and
     * the {@link OrthographicCamera.far | far} clipping plane at 500.
     */
    'camera',
] as const).distinct()
objProps.directionalLightShadow = _directionalLightShadow

export type DirectionalLightShadowProps = Node<DirectionalLightShadow, typeof DirectionalLightShadow, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        directionalLightShadow: {}
    }
}

defaults.directionalLightShadow = {}

