import { Capsule } from 'three/examples/jsm/math/Capsule.js';
export * from 'three/examples/jsm/math/Capsule.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Capsule = Capsule;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Capsule.d.ts
consParams.capsule = [
    'start',
    'end',
    'radius',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Capsule.d.ts
objParams.capsule = [
    'start',
    'end',
    'radius',
].distinct();
defaults.capsule = {};
