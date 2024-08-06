import { Box3Helper } from 'three/src/helpers/Box3Helper.js';
export { Box3Helper } from 'three/src/helpers/Box3Helper.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Box3Helper = Box3Helper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\Box3Helper.d.ts
/**
 * Helper object to visualize a {@link THREE.Box3}.
 * @example
 * ```typescript
 * const box = new THREE.Box3(,
 * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3),
 * const helper = new THREE.Box3Helper(box, 0xffff00,
 * scene.add(helper,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js}
 */
consParams.box3Helper = [
    /**
     * Creates a new wireframe box that represents the passed Box3.
     * @param box The Box3 to show.
     * @param color The box's color. Default `0xffff00`
     */
    'box',
    'color',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\Box3Helper.d.ts
/**
 * Helper object to visualize a {@link THREE.Box3 | Box3}.
 * @example
 * ```typescript
 * const box = new THREE.Box3()
 * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3))
 * const helper = new THREE.Box3Helper(box, 0xffff00)
 * scene.add(helper)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js | Source}
 */
objParams.box3Helper = [...objParams.lineSegments,
    /**
     * The Box3 being visualized.
     */
    'box',
].distinct();
defaults.box3Helper = { color: 16776960 };
