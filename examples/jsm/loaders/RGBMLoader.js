import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader.js';
export * from 'three/examples/jsm/loaders/RGBMLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.RGBMLoader = RGBMLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBMLoader.d.ts
consParams.rgbm = [
    'width',
    'height',
    'data',
    'header',
    'format',
    'type',
    'flipY',
].distinct();
consParams.rgbmLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBMLoader.d.ts
objParams.rgbm = [
    'width',
    'height',
    'data',
    'header',
    'format',
    'type',
    'flipY',
].distinct();
objParams.rgbmLoader = [...objParams.dataTextureLoader,
    'type',
    'maxrange',
].distinct();
defaults.rgbmLoader = {};
