import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
export * from 'three/examples/jsm/loaders/RGBELoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.RGBELoader = RGBELoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBELoader.d.ts
consParams.rgbe = [
    'width',
    'height',
    'data',
    'header',
    'gamma',
    'exposure',
    'type',
].distinct();
consParams.rgbeLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBELoader.d.ts
objParams.rgbe = [
    'width',
    'height',
    'data',
    'header',
    'gamma',
    'exposure',
    'type',
].distinct();
objParams.rgbeLoader = [...objParams.dataTextureLoader,
    'type',
].distinct();
defaults.rgbeLoader = {};
