import { Vector3 } from 'three/src/math/Vector3.js';
export { Vector3 } from 'three/src/math/Vector3.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Vector3 = Vector3;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector3.d.ts
consParams.vector3Like = [].distinct();
/**
 * 3d vector.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
 *
 * @example
 * const a = new THREE.Vector3( 1, 0, 0 ,
 * const b = new THREE.Vector3( 0, 1, 0 ,
 * const c = new THREE.Vector3(,
 * c.crossVectors( a, b ,
 */
consParams.vector3 = [
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    /**
     * @default 0
     */
    'z',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector3.d.ts
objParams.vector3Like = [].distinct();
/**
 * 3d vector.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
 *
 * @example
 * const a = new THREE.Vector3( 1, 0, 0 )
 * const b = new THREE.Vector3( 0, 1, 0 )
 * const c = new THREE.Vector3()
 * c.crossVectors( a, b )
 */
objParams.vector3 = [
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    /**
     * @default 0
     */
    'z',
].distinct();
defaults.vector3 = { x: 0, y: 0, z: 0 };
