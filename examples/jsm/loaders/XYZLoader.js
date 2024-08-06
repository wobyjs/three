import { XYZLoader } from 'three/examples/jsm/loaders/XYZLoader.js';
export * from 'three/examples/jsm/loaders/XYZLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.XYZLoader = XYZLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\XYZLoader.d.ts
consParams.xyzLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\XYZLoader.d.ts    
objParams.xyzLoader = [...objParams.loader,
].distinct();
defaults.xyzLoader = {};
