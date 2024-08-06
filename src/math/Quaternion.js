import { Quaternion } from 'three/src/math/Quaternion.js';
// export { Quaternion } from 'three/src/math/Quaternion.js'
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Quaternion = Quaternion;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Quaternion.d.ts
consParams.quaternionLike = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Quaternion.d.ts
objParams.quaternionLike = [].distinct();
/**
 * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
 *
 * @example
 * const quaternion = new THREE.Quaternion(,
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 ,
 * const vector = new THREE.Vector3( 1, 0, 0 ,
 * vector.applyQuaternion( quaternion ,
 */
consParams.quaternion = [
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
    /**
     * @default 1
     */
    'w',
].distinct();
/**
 * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
 *
 * @example
 * const quaternion = new THREE.Quaternion()
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 )
 * const vector = new THREE.Vector3( 1, 0, 0 )
 * vector.applyQuaternion( quaternion )
 */
objParams.quaternion = [
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
    /**
     * @default 1
     */
    'w',
].distinct();
defaults.quaternion = {};
