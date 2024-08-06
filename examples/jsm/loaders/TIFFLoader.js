import { TIFFLoader } from 'three/examples/jsm/loaders/TIFFLoader.js';
export * from 'three/examples/jsm/loaders/TIFFLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TIFFLoader = TIFFLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TIFFLoader.d.ts
consParams.tiffResult = [
    'width',
    'height',
    'data',
    'flipY',
    'magFilter',
    'minFilter',
].distinct();
consParams.tiffLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TIFFLoader.d.ts
objParams.tiffResult = [
    'width',
    'height',
    'data',
    'flipY',
    'magFilter',
    'minFilter',
].distinct();
objParams.tiffLoader = [...objParams.dataTextureLoader,
].distinct();
defaults.tiffLoader = {};
