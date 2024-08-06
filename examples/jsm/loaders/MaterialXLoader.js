import { MaterialXLoader } from 'three/examples/jsm/loaders/MaterialXLoader.js';
export * from 'three/examples/jsm/loaders/MaterialXLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MaterialXLoader = MaterialXLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MaterialXLoader.d.ts
consParams.materialXLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MaterialXLoader.d.ts    
objParams.materialXLoader = [...objParams.loader,
].distinct();
defaults.materialXLoader = {};
