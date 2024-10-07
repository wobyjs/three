import { Object3DNode } from '../../three-types'
import { DirectionalLight } from 'three/src/lights/DirectionalLight.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js'
export { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        DirectionalLightHelper: typeof DirectionalLightHelper
    }
}

Three.DirectionalLightHelper = DirectionalLightHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            directionalLightHelper: DirectionalLightHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        directionalLightHelper: typeof directionalLightHelper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        directionalLightHelper: typeof _directionalLightHelper
    }
}


/**
 * Helper object to assist with visualizing a {@link THREE.DirectionalLight}'s effect on the scene
 * @remarks
 * This consists of plane and a line representing the light's position and direction.
 * @example
 * ```typescript
 * const light = new THREE.DirectionalLight(0xFFFFFF,
 * scene.add(light,
 *
 * const helper = new THREE.DirectionalLightHelper(light, 5,
 * scene.add(helper,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js}
 */

const directionalLightHelper = ([
    /**
     * Create a new instance of {@link DirectionalLightHelper}
     * @param light The light to be visualized.
     * @param size Dimensions of the plane. Default `1`
     * @param color If this.is not the set the helper will take the color of the light. Default `light.color`
     */
    'light',
    'size',
    'color',
] as const).distinct()
consParams.directionalLightHelper = directionalLightHelper


/**
 * Helper object to assist with visualizing a {@link THREE.DirectionalLight | DirectionalLight}'s effect on the scene
 * @remarks
 * This consists of plane and a line representing the light's position and direction.
 * @example
 * ```typescript
 * const light = new THREE.DirectionalLight(0xFFFFFF)
 * scene.add(light)
 *
 * const helper = new THREE.DirectionalLightHelper(light, 5)
 * scene.add(helper)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js | Source}
 */

const _directionalLightHelper = ([...objProps.object3d,
    /**
     * Contains the line mesh showing the location of the directional light.
     */
    'lightPlane',
    /**
     * Reference to the {@link THREE.DirectionalLight | directionalLight} being visualized.
     */
    'light',
    /**
     * Reference to the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
     */
    'matrix',
    /**
     * Is set to `false`, as the helper is using the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    'matrixAutoUpdate',
    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    'color',
    'targetLine', // TODO: Double check if this need to be exposed or not.
] as const).distinct()
objProps.directionalLightHelper = _directionalLightHelper

export type DirectionalLightHelperProps = Object3DNode<DirectionalLightHelper, typeof DirectionalLightHelper, { light: DirectionalLight; size?: number; color?: ColorRepresentation; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        directionalLightHelper: Partial<{ light: DirectionalLight; size?: number; color?: ColorRepresentation; }>
    }
}

defaults.directionalLightHelper = { size: 1 }
