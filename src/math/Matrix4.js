import { Matrix4 } from 'three/src/math/Matrix4.js';
// export { Matrix4 } from 'three/src/math/Matrix4.js'
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Matrix3';
Three.Matrix4 = Matrix4;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix4.d.ts
/**
 * A 4x4 Matrix.
 *
 * @example
 * // Simple rig for rotating around 3 axes
 * const m = new THREE.Matrix4(,
 * const m1 = new THREE.Matrix4(,
 * const m2 = new THREE.Matrix4(,
 * const m3 = new THREE.Matrix4(,
 * const alpha = 0,
 * const beta = Math.PI,
 * const gamma = Math.PI/2,
 * m1.makeRotationX( alpha ,
 * m2.makeRotationY( beta ,
 * m3.makeRotationZ( gamma ,
 * m.multiplyMatrices( m1, m2 ,
 * m.multiply( m3 ,
 */
consParams.matrix4 = [
    /**
     * Creates an identity matrix.
     */
    /**
     * Creates a 4x4 matrix with the given arguments in row-major order.
     */
    'n11',
    'n12',
    'n13',
    'n14',
    'n21',
    'n22',
    'n23',
    'n24',
    'n31',
    'n32',
    'n33',
    'n34',
    'n41',
    'n42',
    'n43',
    'n44',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix4.d.ts
/**
 * A 4x4 Matrix.
 *
 * @example
 * // Simple rig for rotating around 3 axes
 * const m = new THREE.Matrix4()
 * const m1 = new THREE.Matrix4()
 * const m2 = new THREE.Matrix4()
 * const m3 = new THREE.Matrix4()
 * const alpha = 0
 * const beta = Math.PI
 * const gamma = Math.PI/2
 * m1.makeRotationX( alpha )
 * m2.makeRotationY( beta )
 * m3.makeRotationZ( gamma )
 * m.multiplyMatrices( m1, m2 )
 * m.multiply( m3 )
 */
objParams.matrix4 = [...objParams.matrix,
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1].distinct()

     */
    'elements',
].distinct();
defaults.matrix4 = {};
