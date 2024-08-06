import { Box3 } from 'three/src/math/Box3.js';
export { Box3 } from 'three/src/math/Box3.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Box3 = Box3;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box3.d.ts
consParams.box3 = [
    'min',
    'max',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box3.d.ts
objParams.box3 = [
    /**
     * @default new THREE.Vector3( + Infinity, + Infinity, + Infinity )
     */
    'min',
    /**
     * @default new THREE.Vector3( - Infinity, - Infinity, - Infinity )
     */
    'max',
].distinct();
defaults.box3 = {};
