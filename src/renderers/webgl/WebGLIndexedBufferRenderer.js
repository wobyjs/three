import { WebGLIndexedBufferRenderer } from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer.js';
export { WebGLIndexedBufferRenderer } from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLIndexedBufferRenderer = WebGLIndexedBufferRenderer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlIndexedBufferRenderer.d.ts
consParams.webglIndexedBufferRenderer = [
    'gl',
    'extensions',
    'info',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlIndexedBufferRenderer.d.ts
objParams.webglIndexedBufferRenderer = [
    'setMode',
    'setIndex',
    'render',
    'renderInstances',
    'renderMultiDraw',
    'renderMultiDrawInstances',
].distinct();
defaults.webGLIndexedBufferRenderer = {};
