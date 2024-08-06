import { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js';
export { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.WebGLCubeRenderTarget = WebGLCubeRenderTarget;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlCubeRenderTarget.d.ts
consParams.webglCubeRenderTarget = [
    'size',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlCubeRenderTarget.d.ts    
objParams.webglCubeRenderTarget = [...objParams.webglRenderTarget,
    'textures',
    'texture',
].distinct();
defaults.webGLCubeRenderTarget = { size: 1 };
