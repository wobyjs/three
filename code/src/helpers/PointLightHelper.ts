import { Object3DNode } from '../../three-types'
import { PointLight } from 'three/src/lights/PointLight.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { PointLightHelper } from 'three/src/helpers/PointLightHelper.js'
export { PointLightHelper } from 'three/src/helpers/PointLightHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        PointLightHelper: typeof PointLightHelper
    }
}

Three.PointLightHelper = PointLightHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLightHelper: PointLightHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        pointLightHelper: typeof pointLightHelper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        pointLightHelper: typeof _pointLightHelper
    }
}


/**
 * This displays a helper object consisting of a spherical {@link THREE.Mesh} for visualizing a {@link THREE.PointLight}.
 * @example
 * ```typescript
 * const pointLight = new THREE.PointLight(0xff0000, 1, 100,
 * pointLight.position.set(10, 10, 10,
 * scene.add(pointLight,
 * const sphereSize = 1,
 * const {@link PointLightHelper} = new THREE.PointLightHelper(pointLight, sphereSize,
 * scene.add(pointLightHelper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PointLightHelper.js}
 */

const pointLightHelper = ([
    /**
     * Create a new instance of {@link PointLightHelper}
     * @param light The light to be visualized.
     * @param sphereSize The size of the sphere helper. Expects a `Float`. Default `1`
     * @param color If this.is not the set the helper will take the color of the light.
     */
    'light',
    'sphereSize',
    'color',
] as const).distinct()
consParams.pointLightHelper = pointLightHelper


/**
 * This displays a helper object consisting of a spherical {@link THREE.Mesh | Mesh} for visualizing a {@link THREE.PointLight | PointLight}.
 * @example
 * ```typescript
 * const pointLight = new THREE.PointLight(0xff0000, 1, 100)
 * pointLight.position.set(10, 10, 10)
 * scene.add(pointLight)
 * const sphereSize = 1
 * const {@link PointLightHelper} = new THREE.PointLightHelper(pointLight, sphereSize)
 * scene.add(pointLightHelper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGl / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PointLightHelper.js | Source}
 */

const _pointLightHelper = ([...objProps.object3d,
    /**
     * The {@link THREE.PointLight | PointLight} that is being visualized.
     */
    // 'light',
    /**
     * Reference to the {@link THREE.PointLight.matrixWorld | light.matrixWorld}.
     */
    'matrix',
    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    'color',
    /**
     * Is set to `false`, as the helper is using the {@link THREE.PointLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    'matrixAutoUpdate',
] as const).distinct()
objProps.pointLightHelper = _pointLightHelper

export type PointLightHelperProps = Object3DNode<PointLightHelper, typeof PointLightHelper, { light: PointLight; sphereSize?: number; color?: ColorRepresentation; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        pointLightHelper: Partial<{ light: PointLight; sphereSize?: number; color?: ColorRepresentation; }>
    }
}

defaults.pointLightHelper = { sphereSize: 1 }

