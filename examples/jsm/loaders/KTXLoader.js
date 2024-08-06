import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js';
export * from 'three/examples/jsm/loaders/KTXLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.KTXLoader = KTXLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTXLoader.d.ts
consParams.ktx = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct();
consParams.ktxLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTXLoader.d.ts
objParams.ktx = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct();
objParams.ktxLoader = [...objParams.compressedTextureLoader,
].distinct();
defaults.ktxLoader = {};
