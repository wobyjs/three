import { Sphere } from 'three/src/math/Sphere.js';
export { Sphere } from 'three/src/math/Sphere.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Sphere = Sphere;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Sphere.d.ts
consParams.sphere = [
    'center',
    'radius',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Sphere.d.ts
objParams.sphere = [
    /**
     * @default new Vector3()
     */
    'center',
    /**
     * @default 1
     */
    'radius',
].distinct();
defaults.sphere = {};
