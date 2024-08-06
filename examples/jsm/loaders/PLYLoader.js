import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
export * from 'three/examples/jsm/loaders/PLYLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PLYLoader = PLYLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\plyLoader.d.ts
consParams.plyLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PLYLoader.d.ts    
objParams.plyLoader = [...objParams.loader,
    'propertyNameMapping',
    'customPropertyMapping',
].distinct();
defaults.plyLoader = {};
