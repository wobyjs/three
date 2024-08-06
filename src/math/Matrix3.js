import { Matrix3 } from 'three/src/math/Matrix3.js';
export * from 'three/src/math/Matrix3.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Matrix3 = Matrix3;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\MathUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix3.d.ts
// https://threejs.org/docs/#api/en/math/Matrix3
/**
 * ( interface Matrix )
 */
consParams.matrix = [
    /**
     * Array with matrix values.
     */
    'elements',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\MathUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix3.d.ts
// https://threejs.org/docs/#api/en/math/Matrix3
/**
 * ( interface Matrix )
 */
objParams.matrix = [
    /**
     * Array with matrix values.
     */
    'elements',
].distinct();
/**
 * ( class Matrix3 implements Matrix )
 */
consParams.matrix3 = [
    /**
     * Creates an identity matrix.
     */
    /**
     * Creates a 3x3 matrix with the given arguments in row-major order.
     */
    'n11',
    'n12',
    'n13',
    'n21',
    'n22',
    'n23',
    'n31',
    'n32',
    'n33',
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    'elements',
].distinct();
/**
 * ( class Matrix3 implements Matrix )
 */
objParams.matrix3 = [...objParams.matrix,
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1].distinct()

     */
    'elements',
].distinct();
defaults.matrix3 = {};
