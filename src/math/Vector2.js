import { Vector2 } from 'three/src/math/Vector2.js';
export { Vector2 } from 'three/src/math/Vector2.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Vector2 = Vector2;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector2.d.ts
consParams.vector2Like = [].distinct();
/**
 * 2D vector.
 */
consParams.vector2 = [
    'x',
    'y',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector2.d.ts
objParams.vector2Like = [].distinct();
/**
 * 2d vector.
 */
objParams.vector2 = [
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    'width',
    'height',
].distinct();
defaults.vector2 = { x: 0, y: 0 };
