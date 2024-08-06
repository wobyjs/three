import { WebGLState } from 'three/src/renderers/webgl/WebGLState.js';
export { WebGLState } from 'three/src/renderers/webgl/WebGLState.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLState = WebGLState;
consParams.webglState = [
    'gl',
].distinct();
objParams.webglState = [
    'buffers',
].distinct();
defaults.webGLState = {};
