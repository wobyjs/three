import { PointLightHelper } from 'three/src/helpers/PointLightHelper.js';
export { PointLightHelper } from 'three/src/helpers/PointLightHelper.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.PointLightHelper = PointLightHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\PointLightHelper.d.ts
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
consParams.pointLightHelper = [
    /**
     * Create a new instance of {@link PointLightHelper}
     * @param light The light to be visualized.
     * @param sphereSize The size of the sphere helper. Expects a `Float`. Default `1`
     * @param color If this.is not the set the helper will take the color of the light.
     */
    'light',
    'sphereSize',
    'color',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\PointLightHelper.d.ts
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
objParams.pointLightHelper = [...objParams.object3d,
    /**
     * The {@link THREE.PointLight | PointLight} that is being visualized.
     */
    'light',
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
].distinct();
defaults.pointLightHelper = { sphereSize: 1 };
