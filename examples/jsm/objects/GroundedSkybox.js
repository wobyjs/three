import { GroundedSkybox } from 'three/examples/jsm/objects/GroundedSkybox.js';
export * from 'three/examples/jsm/objects/GroundedSkybox.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.GroundedSkybox = GroundedSkybox;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\GroundedSkybox.d.ts
consParams.groundedSkybox = [
    'map',
    'height',
    'radius',
    'resolution',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\GroundedSkybox.d.ts    
objParams.groundedSkybox = [...objParams.mesh,
].distinct();
defaults.groundedSkybox = {};
