import { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js';
export { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLObjects = WebGLObjects;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlObjects.d.ts
consParams.webglObjects = [
    'gl',
    'geometries',
    'attributes',
    'info',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlObjects.d.ts
objParams.webglObjects = [].distinct();
defaults.webGLObjects = {};
