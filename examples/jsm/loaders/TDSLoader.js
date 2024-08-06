import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader.js';
export * from 'three/examples/jsm/loaders/TDSLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TDSLoader = TDSLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TDSLoader.d.ts
consParams.tdsLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TDSLoader.d.ts    
objParams.tdsLoader = [...objParams.loader,
    'debug',
    'group',
    'manager',
    'materials',
    'meshes',
    'position',
].distinct();
defaults.tdsLoader = {};
