import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader.js';
export * from 'three/examples/jsm/loaders/LDrawLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LDrawLoader = LDrawLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LDrawLoader.d.ts
consParams.lDrawLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LDrawLoader.d.ts    
objParams.lDrawLoader = [...objParams.loader,
    'materials',
    'materialsLibrary',
    'fileMap',
    'smoothNormals',
].distinct();
defaults.lDrawLoader = {};
