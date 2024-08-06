import { ArrowHelper } from 'three/src/helpers/ArrowHelper.js';
export { ArrowHelper } from 'three/src/helpers/ArrowHelper.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import '../../src/core/Object3D';
Three.ArrowHelper = ArrowHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\ArrowHelper.d.ts
/**
 * An 3d arrow object for visualizing directions.
 * @example
 * ```typescript
 * const dir = new THREE.Vector3(1, 2, 0,
 * //normalize the direction vector (convert to vector of length 1)
 * dir.normalize(,
 * const origin = new THREE.Vector3(0, 0, 0,
 * const length = 1,
 * const hex = 0xffff00,
 * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex,
 * scene.add(arrowHelper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh / shadowmesh}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js}
 */
consParams.arrowHelper = [
    /**
     * Create a new instance of {@link ArrowHelper}
     * @param dir Direction from origin. Must be a unit vector. Default `new THREE.Vector3(0, 0, 1)`
     * @param origin Point at which the arrow starts. Default `new THREE.Vector3(0, 0, 0)`
     * @param length Length of the arrow. Default `1`
     * @param hex Hexadecimal value to define color. Default `0xffff00`
     * @param headLength The length of the head of the arrow. Default `0.2 * length`
     * @param headWidth The width of the head of the arrow. Default `0.2 * headLength`
     */
    'dir',
    'origin',
    'length',
    'color',
    'headLength',
    'headWidth',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\ArrowHelper.d.ts
/**
 * An 3d arrow object for visualizing directions.
 * @example
 * ```typescript
 * const dir = new THREE.Vector3(1, 2, 0)
 * //normalize the direction vector (convert to vector of length 1)
 * dir.normalize()
 * const origin = new THREE.Vector3(0, 0, 0)
 * const length = 1
 * const hex = 0xffff00
 * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex)
 * scene.add(arrowHelper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh | WebGl / shadowmesh}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js | Source}
 */
objParams.arrowHelper = [...objParams.object3d,
    /**
     * Contains the line part of the arrowHelper.
     */
    'line',
    /**
     * Contains the cone part of the arrowHelper.
     */
    'cone',
].distinct();
defaults.arrowHelper = { length: 1, color: 16776960, get headLength() { return 0.2 * this.length; }, get headWidth() { return 0.2 * this.headLength; }, };
