import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader.js';
export * from 'three/examples/jsm/loaders/VRMLLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VRMLLoader = VRMLLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VRMLLoader.d.ts
consParams.vrmlLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VRMLLoader.d.ts    
objParams.vrmlLoader = [...objParams.loader,
].distinct();
defaults.vrmlLoader = {};
