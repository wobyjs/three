import { MorphBlendMesh } from 'three/examples/jsm/misc/MorphBlendMesh.js';
export * from 'three/examples/jsm/misc/MorphBlendMesh.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MorphBlendMesh = MorphBlendMesh;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphBlendMesh.d.ts
consParams.morphBlendMesh = [
    'geometry',
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphBlendMesh.d.ts    
objParams.morphBlendMesh = [...objParams.mesh,
    'animationsMap',
    'animationsList',
].distinct();
defaults.morphBlendMesh = {};
