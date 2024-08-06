import { KMZLoader } from 'three/examples/jsm/loaders/KMZLoader.js';
export * from 'three/examples/jsm/loaders/KMZLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.KMZLoader = KMZLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KMZLoader.d.ts
consParams.kmzLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KMZLoader.d.ts    
objParams.kmzLoader = [...objParams.loader,
].distinct();
defaults.kmzLoader = {};
