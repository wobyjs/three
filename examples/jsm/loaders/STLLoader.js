import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
export * from 'three/examples/jsm/loaders/STLLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.STLLoader = STLLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\stlLoader.d.ts
consParams.stlLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\STLLoader.d.ts    
objParams.stlLoader = [...objParams.loader,
].distinct();
defaults.stlLoader = {};
