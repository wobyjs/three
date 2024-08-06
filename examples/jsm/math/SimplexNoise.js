import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
export * from 'three/examples/jsm/math/SimplexNoise.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.SimplexNoise = SimplexNoise;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\SimplexNoise.d.ts
consParams.simplexNoise = [
    'r',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\SimplexNoise.d.ts
objParams.simplexNoise = [].distinct();
defaults.simplexNoise = {};
