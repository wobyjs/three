import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
export * from 'three/examples/jsm/loaders/OBJLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.OBJLoader = OBJLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\OBJLoader.d.ts
consParams.objLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\OBJLoader.d.ts    
objParams.objLoader = [...objParams.loader,
    'materials',
].distinct();
defaults.objLoader = {};
