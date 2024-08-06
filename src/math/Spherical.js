import { Spherical } from 'three/src/math/Spherical.js';
export { Spherical } from 'three/src/math/Spherical.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Spherical = Spherical;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Spherical.d.ts
consParams.spherical = [
    'radius',
    'phi',
    'theta',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Spherical.d.ts
objParams.spherical = [
    /**
     * @default 1
     */
    'radius',
    /**
     * @default 0
     */
    'phi',
    /**
     * @default 0
     */
    'theta',
].distinct();
defaults.spherical = { radius: 1, phi: 0, theta: 0 };
