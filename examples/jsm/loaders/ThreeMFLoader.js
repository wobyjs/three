import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MfLoader.js';
export * from 'three/examples/jsm/loaders/3MfLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ThreeMfLoader = ThreeMFLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3MfLoader.d.ts
consParams.threeMfLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3MfLoader.d.ts    
objParams.threeMfLoader = [...objParams.loader,
].distinct();
defaults.threeMfLoader = {};
