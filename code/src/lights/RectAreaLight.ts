import { LightNode } from './LightNode'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { RectAreaLight } from 'three/src/lights/RectAreaLight.js'
export { RectAreaLight } from 'three/src/lights/RectAreaLight.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Light'

declare module '../../lib/3/three'
{
    interface Three {
        RectAreaLight: typeof RectAreaLight
    }
}

Three.RectAreaLight = RectAreaLight

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rectAreaLight: RectAreaLightProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        rectAreaLight: typeof rectAreaLight
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        rectAreaLight: typeof _rectAreaLight
    }
}


/**
 * {@link RectAreaLight} emits light uniformly across the face a rectangular plane
 * @remarks
 * This light type can be used to simulate light sources such as bright windows or strip lighting.
 * Important Notes:
 *  - There is no shadow support.
 *  - Only {@link MeshStandardMaterial} and {@link MeshPhysicalMaterial} are supported.
 *  - You have to include {@link https://threejs.org/examples/jsm/lights/RectAreaLightUniformsLib.js} into your scene and call `init()`.
 * @example
 * ```typescript
 * const width = 10,
 * const height = 10,
 * const intensity = 1,
 * const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height,
 * rectLight.position.set(5, 5, 0,
 * rectLight.lookAt(0, 0, 0,
 * scene.add(rectLight)
 * const rectLightHelper = new RectAreaLightHelper(rectLight,
 * rectLight.add(rectLightHelper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_rectarealight / {@link RectAreaLight} }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/RectAreaLight Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js}
 */

const rectAreaLight = ([
    /**
     * Creates a new {@link RectAreaLight}.
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity The light's intensity, or brightness. Expects a `Float`. Default `1`
     * @param width Width of the light. Expects a `Float`. Default `10`
     * @param height Height of the light. Expects a `Float`. Default `10`
     */
    'color',
    'intensity',
    'width',
    'height',
] as const).distinct()
consParams.rectAreaLight = rectAreaLight


/**
 * {@link RectAreaLight} emits light uniformly across the face a rectangular plane
 * @remarks
 * This light type can be used to simulate light sources such as bright windows or strip lighting.
 * Important Notes:
 *  - There is no shadow support.
 *  - Only {@link MeshStandardMaterial | MeshStandardMaterial} and {@link MeshPhysicalMaterial | MeshPhysicalMaterial} are supported.
 *  - You have to include {@link https://threejs.org/examples/jsm/lights/RectAreaLightUniformsLib.js | RectAreaLightUniformsLib} into your scene and call `init()`.
 * @example
 * ```typescript
 * const width = 10
 * const height = 10
 * const intensity = 1
 * const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height)
 * rectLight.position.set(5, 5, 0)
 * rectLight.lookAt(0, 0, 0)
 * scene.add(rectLight)
 * const rectLightHelper = new RectAreaLightHelper(rectLight)
 * rectLight.add(rectLightHelper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_rectarealight | WebGl / {@link RectAreaLight} }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/RectAreaLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js | Source}
 */

const _rectAreaLight = ([...objProps.light,
    /**
     * The width of the light.
     * @remarks Expects a `Float`
     * @defaultValue `10`
     */
    'width',
    /**
     * The height of the light.
     * @remarks Expects a `Float`
     * @defaultValue `10`
     */
    'height',
    /**
     * The light's intensity.
     * @remarks Changing the intensity will also change the light's power.
     * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminance (brightness) of the light measured in nits (cd/m^2).
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    'intensity',
    /**
     * The light's power.
     * @remarks Changing the power will also change the light's intensity.
     * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — power is the luminous power of the light measured in lumens (lm).
     * @remarks Expects a `Float`
     */
    'power',
] as const).distinct()
objProps.rectAreaLight = _rectAreaLight

export type RectAreaLightProps = LightNode<RectAreaLight, typeof RectAreaLight, { color?: ColorRepresentation; intensity?: number; width?: number; height?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        rectAreaLight: { color?: ColorRepresentation; intensity?: number; width?: number; height?: number; }
    }
}

defaults.rectAreaLight = { color: 16777215, intensity: 1, width: 10, height: 10 }