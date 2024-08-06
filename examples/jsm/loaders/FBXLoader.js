import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
export * from 'three/examples/jsm/loaders/FBXLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.FBXLoader = FBXLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FBXLoader.d.ts
consParams.fbxLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FBXLoader.d.ts    
objParams.fbxLoader = [...objParams.loader,
].distinct();
defaults.fbxLoader = {};
