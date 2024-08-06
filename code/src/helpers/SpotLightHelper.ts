import { Object3DNode } from '../../three-types'
import { Light } from 'three/src/lights/Light.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { SpotLightHelper } from 'three/src/helpers/SpotLightHelper.js'
export { SpotLightHelper } from 'three/src/helpers/SpotLightHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        SpotLightHelper: typeof SpotLightHelper
    }
}

Three.SpotLightHelper = SpotLightHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spotLightHelper: SpotLightHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        spotLightHelper: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        spotLightHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\SpotLightHelper.d.ts
/**
 * This displays a cone shaped helper object for a {@link THREE.SpotLight}.
 * @example
 * ```typescript
 * const spotLight = new THREE.SpotLight(0xffffff,
 * spotLight.position.set(10, 10, 10,
 * scene.add(spotLight,
 * const {@link SpotLightHelper} = new THREE.SpotLightHelper(spotLight,
 * scene.add(spotLightHelper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights/ lights / spotlights }
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SpotLightHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SpotLightHelper.js}
 */

consParams.spotLightHelper = [
    /**
     * Create a new instance of {@link SpotLightHelper}
     * @param light The {@link THREE.SpotLight} to be visualized.
     * @param color If this.is not the set the helper will take the color of the light. Default `light.color`
     */
    'light',
    'color',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\SpotLightHelper.d.ts
/**
 * This displays a cone shaped helper object for a {@link THREE.SpotLight | SpotLight}.
 * @example
 * ```typescript
 * const spotLight = new THREE.SpotLight(0xffffff)
 * spotLight.position.set(10, 10, 10)
 * scene.add(spotLight)
 * const {@link SpotLightHelper} = new THREE.SpotLightHelper(spotLight)
 * scene.add(spotLightHelper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights | WebGl/ lights / spotlights }
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SpotLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SpotLightHelper.js | Source}
 */

objParams.spotLightHelper = [...objParams.object3d,
    /**
     * {@link THREE.LineSegments | LineSegments} used to visualize the light.
     */
    'cone',
    /**
     * Reference to the {@link THREE.SpotLight | SpotLight} being visualized.
     */
    'light',
    /**
     * Reference to the spotLight's {@link Object3d.matrixWorld | matrixWorld}.
     */
    'matrix',
    /**
     * The color parameter passed in the constructor.
     * If this is changed, the helper's color will update the next time {@link SpotLightHelper.update | update} is called.
     * @defaultValue `undefined`
     */
    'color',
    /**
     * Is set to `false`, as the helper is using the {@link THREE.Light.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    'matrixAutoUpdate',
].distinct()

export type SpotLightHelperProps = Object3DNode<SpotLightHelper, typeof SpotLightHelper, { light: Light; color?: ColorRepresentation; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        spotLightHelper: Partial<{ light: Light; color?: ColorRepresentation; }>
    }
}

defaults.spotLightHelper = {}

