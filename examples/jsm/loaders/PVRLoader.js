import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js';
export * from 'three/examples/jsm/loaders/PVRLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PVRLoader = PVRLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PVRLoader.d.ts
consParams.pvr = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct();
consParams.pvrLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PVRLoader.d.ts
objParams.pvr = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct();
objParams.pvrLoader = [...objParams.compressedTextureLoader,
].distinct();
defaults.pvrLoader = {};
