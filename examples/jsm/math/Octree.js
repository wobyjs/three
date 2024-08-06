import { Octree } from 'three/examples/jsm/math/Octree.js';
export * from 'three/examples/jsm/math/Octree.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Octree = Octree;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Octree.d.ts
consParams.octree = [
    'box',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Octree.d.ts
objParams.octree = [
    'box',
    'bounds',
    'subTrees',
    'triangles',
    'layers',
].distinct();
defaults.octree = {};
