import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
export * from 'three/examples/jsm/loaders/TGALoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TGALoader = TGALoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TGALoader.d.ts
consParams.tgaLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TGALoader.d.ts    
objParams.tgaLoader = [...objParams.dataTextureLoader,
].distinct();
defaults.tgaLoader = {};
