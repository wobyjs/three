import { USDZLoader } from 'three/examples/jsm/loaders/USDZLoader.js';
export * from 'three/examples/jsm/loaders/USDZLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.USDZLoader = USDZLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\usdzLoader.d.ts
consParams.usdaParser = [].distinct();
consParams.usdzLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\USDZLoader.d.ts
objParams.usdaParser = [].distinct();
objParams.usdzLoader = [...objParams.loader,
].distinct();
defaults.usdzLoader = {};
