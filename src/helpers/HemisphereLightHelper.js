import { HemisphereLightHelper } from 'three/src/helpers/HemisphereLightHelper.js';
export { HemisphereLightHelper } from 'three/src/helpers/HemisphereLightHelper.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.HemisphereLightHelper = HemisphereLightHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\HemisphereLightHelper.d.ts
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
consParams.hemisphereLightHelper = [
    /**
     *  Create a new instance of {@link HemisphereLightHelper}
     * @param light The light being visualized.
     * @param size Thr sphere size
     * @param color If this.is not the set the helper will take the color of the light.
     */
    'light',
    'size',
    'color',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\HemisphereLightHelper.d.ts
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
objParams.hemisphereLightHelper = [...objParams.object3d,
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
].distinct();
defaults.hemisphereLightHelper = {};
