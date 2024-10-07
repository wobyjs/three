import { Node } from '../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { LightShadow } from 'three/src/lights/LightShadow.js'
export { LightShadow } from 'three/src/lights/LightShadow.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Light'

declare module '../../lib/3/three'
{
    interface Three {
        LightShadow: typeof LightShadow
    }
}

Three.LightShadow = LightShadow

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightShadow: LightShadowProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        lightShadow: typeof lightShadow
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        lightShadow: typeof _lightShadow
    }
}


/**
 * Serves as a base class for the other shadow classes.
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js}
 */

const lightShadow = ([
    /**
     * Create a new instance of {@link LightShadow}
     * @param camera The light's view of the world.
     */
    'camera',
] as const).distinct()
consParams.lightShadow = lightShadow


/**
 * Serves as a base class for the other shadow classes.
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js | Source}
 */

const _lightShadow = ([
    /**
     * The light's view of the world.
     * @remark This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
     */
    'camera',
    /**
     * Shadow map bias, how much to add or subtract from the normalized depth when deciding whether a surface is in shadow.
     * @remark The Very tiny adjustments here (in the order of 0.0001) may help reduce artifacts in shadows.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'bias',
    /**
     * Defines how much the position used to query the shadow map is offset along the object normal.
     * @remark The Increasing this value can be used to reduce shadow acne especially in large scenes where light shines onto geometry at a shallow angle.
     * @remark The cost is that shadows may appear distorted.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'normalBias',
    /**
     * Setting this to values greater than 1 will blur the edges of the shadow.toi
     * @remark High values will cause unwanted banding effects in the shadows - a greater {@link LightShadow.mapSize | mapSize
     *  will allow for a higher value to be used here before these effects become visible.
     * @remark If {@link THREE.webglRenderer.shadowMap.type | WebGlRenderer.shadowMap.type} is set to {@link Renderer | PCFSoftShadowMap
     * radius has no effect and it is recommended to increase softness by decreasing {@link LightShadow.mapSize | mapSize} instead.
     * @remark Note that this has no effect if the {@link THREE.webglRenderer.shadowMap | WebGlRenderer.shadowMap}.{@link THREE.webglShadowMap.type | type}
     * is set to {@link THREE.BasicShadowMap | BasicShadowMap}.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    'radius',
    /**
     * The amount of samples to use when blurring a VSM shadow map.
     * @remarks Expects a `Integer`
     * @defaultValue `8`
     */
    'blurSamples',
    /**
     * A {@link THREE.Vector2 | Vector2} defining the width and height of the shadow map.
     * @remarks Higher values give better quality shadows at the cost of computation time.
     * @remarks Values must be powers of 2, up to the {@link THREE.webglRenderer.capabilities | WebGlRenderer.capabilities}.maxTextureSize for a given device,
     * although the width and height don't have to be the same (so, for example, (512, 1024) is valid).
     * @defaultValue `new THREE.Vector2(512, 512)`
     */
    'mapSize',
    /**
     * The depth map generated using the internal camera; a location beyond a pixel's depth is in shadow. Computed internally during rendering.
     * @defaultValue null
     */
    'map',
    /**
     * The distribution map generated using the internal camera; an occlusion is calculated based on the distribution of depths. Computed internally during rendering.
     * @defaultValue null
     */
    'mapPass',
    /**
     * Model to shadow camera space, to compute location and depth in shadow map.
     * Stored in a {@link Matrix4 | Matrix4}.
     * @remarks This is computed internally during rendering.
     * @defaultValue new THREE.Matrix4()
     */
    'matrix',
    /**
     * Enables automatic updates of the light's shadow. If you do not require dynamic lighting / shadows, you may set this to `false`.
     * @defaultValue `true`
     */
    'autoUpdate',
    /**
     * When set to `true`, shadow maps will be updated in the next `render` call.
     * If you have set {@link autoUpdate} to `false`, you will need to set this property to `true` and then make a render call to update the light's shadow.
     * @defaultValue `false`
     */
    'needsUpdate',
] as const).distinct()
objProps.lightShadow = _lightShadow

export type LightShadowProps<TCamera extends Camera = Camera> = Node<LightShadow<TCamera>, typeof LightShadow<TCamera>, { camera: TCamera; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        lightShadow: { camera?: Camera }
    }
}

defaults.lightShadow = {}
