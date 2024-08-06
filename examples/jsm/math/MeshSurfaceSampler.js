import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
export * from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MeshSurfaceSampler = MeshSurfaceSampler;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\MeshSurfaceSampler.d.ts
consParams.meshSurfaceSampler = [
    'mesh',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\MeshSurfaceSampler.d.ts
objParams.meshSurfaceSampler = [
    'distribution',
    'geometry',
    'positionAttribute',
    'weightAttribute',
].distinct();
defaults.meshSurfaceSampler = {};
