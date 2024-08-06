import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
export { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLExtensions = WebGLExtensions;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlExtensions.d.ts
consParams.webglExtensions = [
    'gl',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlExtensions.d.ts
objParams.webglExtensions = [].distinct();
defaults.webGLExtensions = {};
