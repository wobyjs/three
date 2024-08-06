import { Ray } from 'three/src/math/Ray.js';
export { Ray } from 'three/src/math/Ray.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Ray = Ray;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Ray.d.ts
consParams.ray = [
    'origin',
    'direction',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Ray.d.ts
objParams.ray = [
    /**
     * @default new THREE.Vector3()
     */
    'origin',
    /**
     * @default new THREE.Vector3( 0, 0, - 1 )
     */
    'direction',
].distinct();
defaults.ray = {};
