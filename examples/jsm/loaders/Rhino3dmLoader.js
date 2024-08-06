import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js';
export * from 'three/examples/jsm/loaders/3DMLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Rhino3dmLoader = Rhino3dmLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3dMLoader.d.ts
consParams.rhino3dmLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3dMLoader.d.ts    
objParams.rhino3dmLoader = [...objParams.loader,
].distinct();
defaults.rhino3dmLoader = {};
