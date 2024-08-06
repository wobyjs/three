import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
export * from 'three/examples/jsm/loaders/DDSLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.DDSLoader = DDSLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DDSLoader.d.ts
consParams.dds = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct();
consParams.ddsLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DDSLoader.d.ts
objParams.dds = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct();
objParams.ddsLoader = [...objParams.compressedTextureLoader,
].distinct();
defaults.ddsLoader = {};
