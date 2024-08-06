import { ShadowMesh } from 'three/examples/jsm/objects/ShadowMesh.js';
export * from 'three/examples/jsm/objects/ShadowMesh.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ShadowMesh = ShadowMesh;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ShadowMesh.d.ts
consParams.shadowMesh = [
    'mesh',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ShadowMesh.d.ts    
objParams.shadowMesh = [...objParams.mesh,
    'meshMatrix',
].distinct();
defaults.shadowMesh = {};
