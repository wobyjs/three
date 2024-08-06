import { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js';
export { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.SphericalHarmonics3 = SphericalHarmonics3;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\SphericalHarmonics3.d.ts
consParams.sphericalHarmonics3 = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\SphericalHarmonics3.d.ts
objParams.sphericalHarmonics3 = [
    /**
     * @default [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
     * new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()].distinct()

     */
    'coefficients',
].distinct();
defaults.sphericalHarmonics3 = {};
