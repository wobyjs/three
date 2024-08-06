import { Vector4 } from 'three/src/math/Vector4.js';
export { Vector4 } from 'three/src/math/Vector4.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Vector4 = Vector4;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector4.d.ts
consParams.vector4Like = [].distinct();
/**
 * 4D vector.
 */
consParams.vector4 = [
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
     * @default 0
     */
    'w',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector4.d.ts
objParams.vector4Like = [].distinct();
/**
 * 4D vector.
 */
objParams.vector4 = [
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
     * @default 0
     */
    'w',
    'width',
    'height',
].distinct();
defaults.vector4 = { x: 0, y: 0, z: 0, w: 0 };
