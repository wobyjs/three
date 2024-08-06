import { LightNode } from './LightNode'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { HemisphereLight } from 'three/src/lights/HemisphereLight.js'
export { HemisphereLight } from 'three/src/lights/HemisphereLight.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Light'

declare module '../../lib/3/three'
{
    interface Three {
        HemisphereLight: typeof HemisphereLight
    }
}

Three.HemisphereLight = HemisphereLight

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hemisphereLight: HemisphereLightProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        hemisphereLight: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        hemisphereLight: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\HemisphereLight.d.ts
/**
 * A light source positioned directly above the scene, with color fading from the sky color to the ground color.
 * @remarks This light cannot be used to cast shadows.
 * @example
 * ```typescript
 * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1,
 * scene.add(light,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending / skinning / blending }
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_hemisphere / hemisphere }
 * @see Example: {@link https://threejs.org/examples/#misc_controls_pointerlock / pointerlock }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_kinematics / collada / kinematics }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_stl / stl }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLight Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js}
 */

consParams.hemisphereLight = [
    /**
     * Creates a new {@link HemisphereLight}.
     * @param skyColor Hexadecimal color of the sky. Expects a `Integer`. Default `0xffffff` _(white)_.
     * @param groundColor Hexadecimal color of the ground. Expects a `Integer`. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
     */
    'skyColor',
    'groundColor',
    'intensity',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\HemisphereLight.d.ts
/**
 * A light source positioned directly above the scene, with color fading from the sky color to the ground color.
 * @remarks This light cannot be used to cast shadows.
 * @example
 * ```typescript
 * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
 * scene.add(light)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_hemisphere | lights / hemisphere }
 * @see Example: {@link https://threejs.org/examples/#misc_controls_pointerlock | controls / pointerlock }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_kinematics | loader / collada / kinematics }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_stl | loader / stl }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js | Source}
 */

objParams.hemisphereLight = [...objParams.light,
    /**
     * The light's sky color, as passed in the constructor.
     * @defaultValue `new THREE.Color()` set to white _(0xffffff)_.
     */
    'color',
    /**
     * The light's ground color, as passed in the constructor.
     * @defaultValue `new THREE.Color()` set to white _(0xffffff)_.
     */
    'groundColor',
].distinct()

export type HemisphereLightProps = LightNode<HemisphereLight, typeof HemisphereLight, { skyColor?: ColorRepresentation; groundColor?: ColorRepresentation; intensity?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        hemisphereLight: Partial<{ skyColor?: ColorRepresentation; groundColor?: ColorRepresentation; intensity?: number; }>
    }
}

defaults.hemisphereLight = { skyColor: 16777215, groundColor: 16777215, intensity: 1 }
