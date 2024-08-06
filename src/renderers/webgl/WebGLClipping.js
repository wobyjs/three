import { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping.js';
export { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLClipping = WebGLClipping;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeMaps.d.ts
consParams.webglCubeMaps = [
    'renderer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeMaps.d.ts
objParams.webglCubeMaps = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlClipping.d.ts
consParams.webglClipping = [
    'properties',
    'uniform',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlClipping.d.ts
objParams.webglClipping = [
    'uniform',
    /**
     * @default 0
     */
    'numPlanes',
    /**
     * @default 0
     */
    'numIntersection',
].distinct();
defaults.webGLClipping = {};
