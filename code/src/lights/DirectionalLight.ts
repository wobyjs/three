import { LightNode } from './LightNode'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { DirectionalLight } from 'three/src/lights/DirectionalLight.js'
export { DirectionalLight } from 'three/src/lights/DirectionalLight.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Light'

declare module '../../lib/3/three'
{
    interface Three {
        DirectionalLight: typeof DirectionalLight
    }
}

Three.DirectionalLight = DirectionalLight

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            directionalLight: DirectionalLightProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        directionalLight: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        directionalLight: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\DirectionalLight.d.ts
/**
 * A light that gets emitted in a specific direction
 * @remarks
 * This light will behave as though it is infinitely far away and the rays produced from it are all parallel
 * The common use case for this.is to simulate daylight, the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.
 * A common point of confusion for directional lights is that setting the rotation has no effect
 * @remarks
 * This is because three.js's {@link DirectionalLight} is the equivalent to what is often called a 'Target Direct Light' in other applications.
 * This means that its direction is calculated as pointing from the light's {@link THREE.Object3d.position} to the {@link THREE.DirectionalLight.target}'s
 * position (as opposed to a 'Free Direct Light' that just has a rotation component).
 * See the {@link THREE.DirectionalLight.target} property below for details on updating the target.
 * @example
 * ```typescript
 * // White directional light at half intensity shining from the top.
 * const {@link DirectionalLight} = new THREE.DirectionalLight(0xffffff, 0.5,
 * scene.add(directionalLight,
 * ```
 * @see Example: {@link https://threejs.org/examples/#misc_controls_fly / fly }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier / parallaxbarrier }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo / stereo }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines / extrude / splines }
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_bumpmap / bumpmap }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/DirectionalLight Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js}
 */

consParams.directionalLight = [
    /**
     * Creates a new {@link DirectionalLight}.
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
     */
    'color',
    'intensity',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\DirectionalLight.d.ts
/**
 * A light that gets emitted in a specific direction
 * @remarks
 * This light will behave as though it is infinitely far away and the rays produced from it are all parallel
 * The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.
 * A common point of confusion for directional lights is that setting the rotation has no effect
 * @remarks
 * This is because three.js's {@link DirectionalLight} is the equivalent to what is often called a 'Target Direct Light' in other applications.
 * This means that its direction is calculated as pointing from the light's {@link THREE.Object3d.position | position} to the {@link THREE.DirectionalLight.target | target}'s
 * position (as opposed to a 'Free Direct Light' that just has a rotation component).
 * See the {@link THREE.DirectionalLight.target | target} property below for details on updating the target.
 * @example
 * ```typescript
 * // White directional light at half intensity shining from the top.
 * const {@link DirectionalLight} = new THREE.DirectionalLight(0xffffff, 0.5)
 * scene.add(directionalLight)
 * ```
 * @see Example: {@link https://threejs.org/examples/#misc_controls_fly | controls / fly }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | geometry / extrude / splines }
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_bumpmap | materials / bumpmap }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/DirectionalLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js | Source}
 */

objParams.directionalLight = [...objParams.light,
    /**
     * Whether the object gets rendered into shadow map.
     * @remarks
     * If set to `true` light will cast dynamic shadows.
     * **Warning**: This is expensive and requires tweaking to get shadows looking right.
     * @see {@link THREE.DirectionalLightShadow | DirectionalLightShadow} for details.
     * @defaultValue `false`
     */
    'castShadow',
    /**
     * A {@link THREE.DirectionalLightShadow | DirectionalLightShadow} used to calculate shadows for this light.
     * @defaultValue `new THREE.DirectionalLightShadow()`
     */
    'shadow',
    /**
     * The {@link DirectionalLight} points from its {@link DirectionalLight.position | position} to target.position.
     * @remarks **Note**: For the target's position to be changed to anything other than the default,
     * it must be added to the {@link THREE.Scene | scene} using
     * ```typescript
     * Scene.add( light.target )
     * ```
     * This is so that the target's {@link THREE.Object3d.matrixWorld | matrixWorld} gets automatically updated each frame.
     *
     * It is also possible to set the target to be another object in the scene (anything with a {@link THREE.Object3d.position | position} property),
     * like so:
     * ```typescript
     * const targetObject = new THREE.Object3d()
     * scene.add(targetObject)
     * light.target = targetObject
     * ```
     * The {@link DirectionalLight} will now track the target object.
     * @defaultValue `new THREE.Object3d()` at _(0, 0, 0)_
     */
    'target',
].distinct()

export type DirectionalLightProps = LightNode<DirectionalLight, typeof DirectionalLight, { color?: ColorRepresentation; intensity?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        directionalLight: { color?: ColorRepresentation; intensity?: number; }
    }
}

defaults.directionalLight = { color: 16777215, intensity: 1 }
