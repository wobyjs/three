import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
export * from 'three/examples/jsm/loaders/EXRLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.EXRLoader = EXRLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\EXRLoader.d.ts
consParams.exr = [
    'header',
    'width',
    'height',
    'data',
    'format',
    'colorSpace',
    'type',
].distinct();
consParams.exrLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\EXRLoader.d.ts
objParams.exr = [
    'header',
    'width',
    'height',
    'data',
    'format',
    'colorSpace',
    'type',
].distinct();
objParams.exrLoader = [...objParams.dataTextureLoader,
    'type',
].distinct();
defaults.exrLoader = {};
