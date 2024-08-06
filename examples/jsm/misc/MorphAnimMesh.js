import { MorphAnimMesh } from 'three/examples/jsm/misc/MorphAnimMesh.js';
export * from 'three/examples/jsm/misc/MorphAnimMesh.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MorphAnimMesh = MorphAnimMesh;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphAnimMesh.d.ts
consParams.morphAnimMesh = [
    'geometry',
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphAnimMesh.d.ts    
objParams.morphAnimMesh = [...objParams.mesh,
    'mixer',
    'activeAction',
].distinct();
defaults.morphAnimMesh = {};
