import { WebGLGeometries } from 'three/src/renderers/webgl/WebGLGeometries.js';
export { WebGLGeometries } from 'three/src/renderers/webgl/WebGLGeometries.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLGeometries = WebGLGeometries;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlGeometries.d.ts
consParams.webglGeometries = [
    'gl',
    'attributes',
    'info',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlGeometries.d.ts
objParams.webglGeometries = [].distinct();
defaults.webGLGeometries = {};
