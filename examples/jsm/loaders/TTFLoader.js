import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
export * from 'three/examples/jsm/loaders/TTFLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TTFLoader = TTFLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TTFLoader.d.ts
consParams.ttfLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TTFLoader.d.ts    
objParams.ttfLoader = [...objParams.loader,
    'reversed',
].distinct();
defaults.ttfLoader = {};
