import { Frustum } from 'three/src/math/Frustum.js';
export { Frustum } from 'three/src/math/Frustum.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Frustum = Frustum;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Frustum.d.ts
/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */
consParams.frustum = [
    'p0',
    'p1',
    'p2',
    'p3',
    'p4',
    'p5',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Frustum.d.ts
/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */
objParams.frustum = [
    /**
     * Array of 6 vectors.
     */
    'planes',
].distinct();
defaults.frustum = {};
