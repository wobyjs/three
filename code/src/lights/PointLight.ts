import { LightNode } from './LightNode'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { PointLight } from 'three/src/lights/PointLight.js'
export { PointLight } from 'three/src/lights/PointLight.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Light'

declare module '../../lib/3/three'
{
    interface Three {
        PointLight: typeof PointLight
    }
}

Three.PointLight = PointLight

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLight: PointLightProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        pointLight: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        pointLight: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLight.d.ts
/**
 * A light that gets emitted from a single point in all directions
 * @remarks
 * A common use case for this.is to replicate the light emitted from a bare lightbulb.
 * @example
 * ```typescript
 * const light = new THREE.PointLight(0xff0000, 1, 100,
 * light.position.set(50, 50, 50,
 * scene.add(light,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_pointlights / pointlights }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph / anaglyph }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text / text }
 * @see Example: {@link https://threejs.org/examples/#webgl_lensflares }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/PointLight Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js}
 */

consParams.pointLight = [
    /**
     * Creates a new PointLight.
     * @param color Hexadecimal color of the light. Default is 0xffffff (white). Expects a `Integer`
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
     * @param distance Maximum range of the light. Default is 0 (no limit).
     * @param decay The amount the light dims along the distance of the light. Expects a `Float`. Default `2`
     */
    'color',
    'intensity',
    'distance',
    'decay',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLight.d.ts
/**
 * A light that gets emitted from a single point in all directions
 * @remarks
 * A common use case for this is to replicate the light emitted from a bare lightbulb.
 * @example
 * ```typescript
 * const light = new THREE.PointLight(0xff0000, 1, 100)
 * light.position.set(50, 50, 50)
 * scene.add(light)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_pointlights | lights / pointlights }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text | geometry / text }
 * @see Example: {@link https://threejs.org/examples/#webgl_lensflares | lensflares }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/PointLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js | Source}
 */

objParams.pointLight = [...objParams.light,
    /**
     * @default 'PointLight'
     */
    'type',
    /**
     * The light's intensity.
     *
     * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminous intensity of the light measured in candela (cd).
     * @remarks Changing the intensity will also change the light's power.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    'intensity',
    /**
     * When **Default mode** — When distance is zero, light does not attenuate. When distance is non-zero,
     * light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.
     *
     * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — When distance is zero,
     * light will attenuate according to inverse-square law to infinite distance.
     * When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff,
     * where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct.
     *
     * @defaultValue `0.0`
     * @remarks Expects a `Float`
     */
    'distance',
    /**
     * If set to `true` light will cast dynamic shadows.
     * **Warning**: This is expensive and requires tweaking to get shadows looking right.
     * @see {@link THREE.PointLightShadow | PointLightShadow} for details.
     * @defaultValue `false`
     */
    'castShadow',
    /**
     * The amount the light dims along the distance of the light.
     * In context of physically-correct rendering the default value should not be changed.
     * @remarks Expects a `Float`
     * @defaultValue `2`
     */
    'decay',
    /**
     * A {@link THREE.PointLightShadow | PointLightShadow} used to calculate shadows for this light.
     * The lightShadow's {@link LightShadow.camera | camera} is set to
     * a {@link THREE.PerspectiveCamera | PerspectiveCamera} with {@link PerspectiveCamera.fov | fov} of 90,
     * {@link PerspectiveCamera.aspect | aspect} of 1,
     * {@link PerspectiveCamera.near | near} clipping plane at 0.5
     * and {@link PerspectiveCamera.far | far} clipping plane at 500.
     * @defaultValue new THREE.PointLightShadow()
     */
    'shadow',
    /**
     * The light's power.
     * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — power is the luminous power of the light measured in lumens (lm).
     * @remarks Changing the power will also change the light's intensity.
     * @remarks Expects a `Float`
     */
    'power',
].distinct()

export type PointLightProps = LightNode<PointLight, typeof PointLight, { color?: ColorRepresentation; intensity?: number; distance?: number; decay?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        pointLight: { color?: ColorRepresentation; intensity?: number; distance?: number; decay?: number; }
    }
}

defaults.pointLight = { color: 16777215, intensity: 1, distance: 0, decay: 2 }
