import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
export * from 'three/examples/jsm/loaders/DRACOLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.DRACOLoader = DRACOLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DRACOLoader.d.ts
consParams.dracoLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DRACOLoader.d.ts    
objParams.dracoLoader = [...objParams.loader,
].distinct();
defaults.dracoLoader = {};
