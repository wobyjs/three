import { Object3DNode } from '../../three-types'
import { HemisphereLight } from 'three/src/lights/HemisphereLight.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { HemisphereLightHelper } from 'three/src/helpers/HemisphereLightHelper.js'
export { HemisphereLightHelper } from 'three/src/helpers/HemisphereLightHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        HemisphereLightHelper: typeof HemisphereLightHelper
    }
}

Three.HemisphereLightHelper = HemisphereLightHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hemisphereLightHelper: HemisphereLightHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        hemisphereLightHelper: typeof hemisphereLightHelper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        hemisphereLightHelper: typeof _hemisphereLightHelper
    }
}


/**
 * Creates a visual aid consisting of a spherical {@link THREE.Mesh} for a {@link THREE.HemisphereLight}.
 * @example
 * ```typescript
 * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1,
 * const helper = new THREE.HemisphereLightHelper(light, 5,
 * scene.add(helper,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/HemisphereLightHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/HemisphereLightHelper.js}
 */

const hemisphereLightHelper = ([
    /**
     *  Create a new instance of {@link HemisphereLightHelper}
     * @param light The light being visualized.
     * @param size Thr sphere size
     * @param color If this.is not the set the helper will take the color of the light.
     */
    'light',
    'size',
    'color',
] as const).distinct()
consParams.hemisphereLightHelper = hemisphereLightHelper


/**
 * Creates a visual aid consisting of a spherical {@link THREE.Mesh | Mesh} for a {@link THREE.HemisphereLight | HemisphereLight}.
 * @example
 * ```typescript
 * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
 * const helper = new THREE.HemisphereLightHelper(light, 5)
 * scene.add(helper)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/HemisphereLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/HemisphereLightHelper.js | Source}
 */

const _hemisphereLightHelper = ([...objProps.object3d,
    /**
     * Reference to the HemisphereLight being visualized.
     */
    'light',
    /**
     * Reference to the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
     */
    'matrix',
    /**
     * Is set to `false`, as the helper is using the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    'matrixAutoUpdate',
    'material', // TODO: Double check if this need to be exposed or not.
    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    'color',
] as const).distinct()
objProps.hemisphereLightHelper = _hemisphereLightHelper

export type HemisphereLightHelperProps = Object3DNode<HemisphereLightHelper, typeof HemisphereLightHelper, { light: HemisphereLight; size: number; color?: ColorRepresentation; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        hemisphereLightHelper: Partial<{ light: HemisphereLight; size: number; color?: ColorRepresentation; }>
    }
}

defaults.hemisphereLightHelper = {}
