import { Sky } from 'three/examples/jsm/objects/Sky.js';
export * from 'three/examples/jsm/objects/Sky.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Sky = Sky;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Sky.d.ts
consParams.sky = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Sky.d.ts    
objParams.sky = [...objParams.mesh,
    'geometry',
    'material',
].distinct();
defaults.sky = {};
