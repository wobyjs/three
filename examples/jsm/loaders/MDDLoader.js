import { MDDLoader } from 'three/examples/jsm/loaders/MDDLoader.js';
export * from 'three/examples/jsm/loaders/MDDLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MDDLoader = MDDLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MDDLoader.d.ts
consParams.mdd = [
    'morphTargets',
    'clip',
].distinct();
consParams.mddLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MDDLoader.d.ts
objParams.mdd = [
    'morphTargets',
    'clip',
].distinct();
objParams.mddLoader = [...objParams.loader,
].distinct();
defaults.mddLoader = {};
