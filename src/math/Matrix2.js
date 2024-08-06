import { Matrix2 } from 'three/src/math/Matrix2.js';
export * from 'three/src/math/Matrix2.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Matrix2 = Matrix2;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\MathUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix2.d.ts
// https://threejs.org/docs/#api/en/math/Matrix2
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
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix2.d.ts
// https://threejs.org/docs/#api/en/math/Matrix2
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
 * ( class Matrix2 implements Matrix )
 */
consParams.Matrix2 = [
    /**
     * Creates an identity matrix.
     */
    /**
     * Creates a 3x3 matrix with the given arguments in row-major order.
     */
    'n11',
    'n12',
    'n21',
    'n22',
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    'elements',
].distinct();
/**
 * ( class Matrix2 implements Matrix )
 */
objParams.Matrix2 = [...objParams.matrix,
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1].distinct()

     */
    'elements',
].distinct();
defaults.Matrix2 = {};
