import { Line3 } from 'three/src/math/Line3.js';
export { Line3 } from 'three/src/math/Line3.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Line3 = Line3;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Line3.d.ts
consParams.line3 = [
    'start',
    'end',
    /**
     * @default new THREE.Vector3()
     */
    'start',
    /**
     * @default new THREE.Vector3()
     */
    'end',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Line3.d.ts
objParams.line3 = [
    /**
     * @default new THREE.Vector3()
     */
    'start',
    /**
     * @default new THREE.Vector3()
     */
    'end',
].distinct();
defaults.line3 = {};
