import { Plane } from 'three/src/math/Plane.js';
export { Plane } from 'three/src/math/Plane.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import { Vector3 } from 'three/src/math/Vector3';
Three.Plane = Plane;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Plane.d.ts
consParams.plane = [
    'normal',
    'constant',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Plane.d.ts
objParams.plane = [
    /**
     * @default new THREE.Vector3( 1, 0, 0 )
     */
    'normal',
    /**
     * @default 0
     */
    'constant',
].distinct();
defaults.plane = { normal: new Vector3(1, 0, 0), constant: 0 };
