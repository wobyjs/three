import { GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader.js';
export * from 'three/examples/jsm/loaders/GCodeLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.GCodeLoader = GCodeLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GCodeLoader.d.ts
consParams.gCodeLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GCodeLoader.d.ts    
objParams.gCodeLoader = [...objParams.loader,
    'splitLayer',
].distinct();
defaults.gCodeLoader = {};
