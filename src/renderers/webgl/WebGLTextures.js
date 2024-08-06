import { WebGLTextures } from 'three/src/renderers/webgl/WebGLTextures.js';
export { WebGLTextures } from 'three/src/renderers/webgl/WebGLTextures.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLTextures = WebGLTextures;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlTextures.d.ts
consParams.webglTextures = [
    'gl',
    'extensions',
    'state',
    'properties',
    'capabilities',
    'utils',
    'info',
    ,
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlTextures.d.ts
objParams.webglTextures = [].distinct();
defaults.webGLTextures = {};
