import { NRRDLoader } from 'three/examples/jsm/loaders/NRRDLoader.js';
export * from 'three/examples/jsm/loaders/NRRDLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NRRDLoader = NRRDLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\NRRDLoader.d.ts
consParams.nrrdLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\NRRDLoader.d.ts    
objParams.nrrdLoader = [...objParams.loader,
    'manager',
    'path',
    'fieldFunctions',
].distinct();
defaults.nrrdLoader = {};
