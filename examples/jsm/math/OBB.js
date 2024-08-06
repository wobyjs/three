import { OBB } from 'three/examples/jsm/math/OBB.js';
export * from 'three/examples/jsm/math/OBB.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.OBB = OBB;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\OBB.d.ts
consParams.obb = [
    'center',
    'halfSize',
    'rotation',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\OBB.d.ts
objParams.obb = [
    'center',
    'halfSize',
    'rotation',
].distinct();
defaults.oBB = {};
