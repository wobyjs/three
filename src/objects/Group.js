import { Group } from 'three/src/objects/Group.js';
export { Group } from 'three/src/objects/Group.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Group = Group;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Group.d.ts
/**
 * Its purpose is to make working with groups of objects syntactically clearer.
 * @remarks This is almost identical to an {@link Object3d}
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1,
 * const material = new THREE.MeshBasicMaterial({
 * color
 *
 * const cubeA = new THREE.Mesh(geometry, material,
 * cubeA.position.set(100, 100, 0,
 * const cubeB = new THREE.Mesh(geometry, material,
 * cubeB.position.set(-100,
-100, 0,
 * //create a {@link Group} and add the two cubes
 * //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group(,
 * group.add(cubeA,
 * group.add(cubeB,
 * scene.add(group,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Group Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Group.js}
 */
consParams.group = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Group.d.ts
/**
 * Its purpose is to make working with groups of objects syntactically clearer.
 * @remarks This is almost identical to an {@link Object3d | Object3d}
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * })
 * const cubeA = new THREE.Mesh(geometry, material)
 * cubeA.position.set(100, 100, 0)
 * const cubeB = new THREE.Mesh(geometry, material)
 * cubeB.position.set(-100, -100, 0)
 * //create a {@link Group} and add the two cubes
 * //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group()
 * group.add(cubeA)
 * group.add(cubeB)
 * scene.add(group)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Group | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Group.js | Source}
 */
objParams.group = [].distinct();
defaults.group = {};
