import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js';
export { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLUtils = WebGLUtils;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniformsGroups.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUtils.d.ts
consParams.webglUtils = [
    'gl',
    'extensions',
    ,
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniformsGroups.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUtils.d.ts
objParams.webglUtils = [].distinct();
defaults.webGLUtils = {};
