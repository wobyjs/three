import { Euler } from 'three/src/math/Euler.js';
// export { Euler, EulerOrder } from 'three/src/math/Euler.js'
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Euler = Euler;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Euler.d.ts
consParams.euler = [
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
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Euler.d.ts
objParams.euler = [
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
     * @default THREE.Euler.DEFAULT_ORDER
     */
    'order',
].distinct();
defaults.euler = { x: 0, y: 0, z: 0, order: 'XYZ' };
