// import { CompressedPixelFormat, TextureDataType } from "../constants.js";
// import { CompressedCubeTexture } from "./CompressedCubeTexture.js";
import { CompressedCubeTexture } from 'three/src/textures/CompressedCubeTexture.js';
export { CompressedCubeTexture } from 'three/src/textures/CompressedCubeTexture.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './CompressedTexture';
Three.CompressedCubeTexture = CompressedCubeTexture;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CompressedCubeTexture.d.ts
consParams.compressedCubeTexture = [
    'images',
    'format',
    'type',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CompressedCubeTexture.d.ts    
objParams.compressedCubeTexture = [...objParams.compressedTexture,
].distinct();
defaults.compressedCubeTexture = {};
