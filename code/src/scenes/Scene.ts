import { Node } from '../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
export { Scene } from 'three/src/scenes/Scene.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../core/Object3D'

declare module '../../lib/3/three'
{
    interface Three {
        Scene: typeof Scene
    }
}

Three.Scene = Scene

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            scene: SceneProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        scene: typeof scene
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        scene: typeof _scene
    }
}


/**
 * Scenes allow you to set up what and where is to be rendered by three.js
 * @remarks
 * This is where you place objects, lights and cameras.
 * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison multiple scenes comparison}
 * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene a scene}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js}
 */

const scene = ([
] as const).distinct()
consParams.scene = scene


/**
 * Scenes allow you to set up what and where is to be rendered by three.js
 * @remarks
 * This is where you place objects, lights and cameras.
 * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison | webgl multiple scenes comparison}
 * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene | Manual: Creating a scene}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js | Source}
 */

const _scene = ([...objProps.object3d,
    /**
     * @defaultValue `Scene`
     */
    /**
     * A {@link Fog | fog} instance defining the type of fog that affects everything rendered in the scene.
     * @defaultValue `null`
     */
    'fog',
    /**
     * Sets the blurriness of the background. Only influences environment maps assigned to {@link THREE.Scene.background | Scene.background}.
     * @defaultValue `0`
     * @remarks Expects a `Float` between `0` and `1`.
     */
    'backgroundBlurriness',
    /**
     * Attenuates the color of the background. Only applies to background textures.
     * @defaultValue `1`
     * @remarks Expects a `Float`
     */
    'backgroundIntensity',
    /**
     * Forces everything in the {@link Scene} to be rendered with the defined material.
     * @defaultValue `null`
     */
    'overrideMaterial',
    /**
     * Defines the background of the scene.
     * @remarks Valid inputs are:
     *  - A {@link THREE.Color | Color} for defining a uniform colored background.
     *  - A {@link THREE.Texture | Texture} for defining a (flat) textured background.
     *  - Texture cubes ({@link THREE.CubeTexture | CubeTexture}) or equirectangular textures for defining a skybox.
     * @defaultValue `null`
     */
    'background',
    /**
     * The rotation of the background in radians. Only influences environment maps assigned to {@link .background}.
     * Default is `(0,0,0)`.
     */
    'backgroundRotation',
    /**
     * Sets the environment map for all physical materials in the scene.
     * However, it's not possible to overwrite an existing texture assigned to {@link THREE.MeshStandardMaterial.envMap | MeshStandardMaterial.envMap}.
     * @defaultValue `null`
     */
    'environment',
    /**
     * Attenuates the color of the environment. Only influences environment maps assigned to {@link Scene.environment}.
     * @default 1
     */
    'environmentIntensity',
    /**
     * The rotation of the environment map in radians. Only influences physical materials in the scene when
     * {@link .environment} is used. Default is `(0,0,0)`.
     */
    'environmentRotation',
] as const).distinct()
objProps.scene = _scene

export type SceneProps = Node<Scene, typeof Scene, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        scene: {}
    }
}

defaults.scene = {}

