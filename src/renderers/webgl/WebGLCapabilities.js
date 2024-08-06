import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js';
export { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLCapabilities = WebGLCapabilities;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCapabilities.d.ts
consParams.webglCapabilitiesParameters = [
    'precision',
    'logarithmicDepthBuffer',
].toObject();
consParams.webglCapabilities = [
    'gl',
    'extensions',
    'parameters', //webglCapabilitiesParameters
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCapabilities.d.ts
objParams.webglCapabilitiesParameters = [
    'precision',
    'logarithmicDepthBuffer',
].distinct();
objParams.webglCapabilities = [
    'getMaxAnisotropy',
    'getMaxPrecision',
    'textureFormatReadable',
    'textureTypeReadable',
    'precision',
    'logarithmicDepthBuffer',
    'maxTextures',
    'maxVertexTextures',
    'maxTextureSize',
    'maxCubemapSize',
    'maxAttributes',
    'maxVertexUniforms',
    'maxVaryings',
    'maxFragmentUniforms',
    'vertexTextures',
    'maxSamples',
].distinct();
defaults.webGLCapabilities = {};
