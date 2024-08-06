import { Triangle } from 'three/src/math/Triangle.js';
export { Triangle } from 'three/src/math/Triangle.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Triangle = Triangle;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Triangle.d.ts
consParams.triangle = [
    'a',
    'b',
    'c',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Triangle.d.ts
objParams.triangle = [
    /**
     * @default new THREE.Vector3()
     */
    'a',
    /**
     * @default new THREE.Vector3()
     */
    'b',
    /**
     * @default new THREE.Vector3()
     */
    'c',
].distinct();
defaults.triangle = {};
