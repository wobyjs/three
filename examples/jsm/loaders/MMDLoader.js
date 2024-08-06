import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js';
export * from 'three/examples/jsm/loaders/MMDLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MMDLoader = MMDLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MMDLoader.d.ts
consParams.mmdLoaderAnimationObject = [
    'animation',
    'mesh',
].distinct();
consParams.mmdLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MMDLoader.d.ts
objParams.mmdLoaderAnimationObject = [
    'animation',
    'mesh',
].distinct();
objParams.mmdLoader = [...objParams.loader,
    'animationBuilder',
    'animationPath',
    'loader',
    'meshBuilder',
    'parser',
].distinct();
defaults.mmdLoader = {};
