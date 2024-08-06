import { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms.js';
export { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLUniforms = WebGLUniforms;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniforms.d.ts
consParams.webglUniforms = [
    'gl',
    'program',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniforms.d.ts
objParams.webglUniforms = [].distinct();
defaults.webGLUniforms = {};
