import { TiltLoader } from 'three/examples/jsm/loaders/TiltLoader.js';
export * from 'three/examples/jsm/loaders/TiltLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TiltLoader = TiltLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TiltLoader.d.ts
consParams.tiltLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TiltLoader.d.ts    
objParams.tiltLoader = [...objParams.loader,
].distinct();
defaults.tiltLoader = {};
