import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
export * from 'three/examples/jsm/loaders/ColladaLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ColladaLoader = ColladaLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\ColladaLoader.d.ts
consParams.collada = [
    'kinematics',
    'library',
    'scene',
].distinct();
consParams.colladaLoader = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\ColladaLoader.d.ts
objParams.collada = [
    'kinematics',
    'library',
    'scene',
].distinct();
objParams.colladaLoader = [...objParams.loader,
].distinct();
defaults.colladaLoader = {};
