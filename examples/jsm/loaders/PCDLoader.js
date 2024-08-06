import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
export * from 'three/examples/jsm/loaders/PCDLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PCDLoader = PCDLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PCDLoader.d.ts
consParams.pcdLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PCDLoader.d.ts    
objParams.pcdLoader = [...objParams.loader,
    'littleEndian',
].distinct();
defaults.pcdLoader = {};
