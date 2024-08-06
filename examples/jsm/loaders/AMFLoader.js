import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader.js';
export * from 'three/examples/jsm/loaders/AMFLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AMFLoader = AMFLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\AMFLoader.d.ts
consParams.amfLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\AMFLoader.d.ts    
objParams.amfLoader = [...objParams.loader,
].distinct();
defaults.amfLoader = {};
