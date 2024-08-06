import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js';
export { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.WebGLRenderTarget = WebGLRenderTarget;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderTarget.d.ts
consParams.webglRenderTarget = [
    'width',
    'height',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderTarget.d.ts    
objParams.webglRenderTarget = [].distinct();
defaults.webGLRenderTarget = {};
