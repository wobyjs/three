import { Cylindrical } from 'three/src/math/Cylindrical.js';
export { Cylindrical } from 'three/src/math/Cylindrical.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Cylindrical = Cylindrical;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Cylindrical.d.ts
consParams.cylindrical = [
    /**
     * @default 1
     */
    'radius',
    /**
     * @default 0
     */
    'theta',
    /**
     * @default 0
     */
    'y',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Cylindrical.d.ts
objParams.cylindrical = [
    /**
     * @default 1
     */
    'radius',
    /**
     * @default 0
     */
    'theta',
    /**
     * @default 0
     */
    'y',
].distinct();
defaults.cylindrical = { radius: 0, theta: 0, y: 0, };
