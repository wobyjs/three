import { WebGLLights } from 'three/src/renderers/webgl/WebGLLights.js';
export { WebGLLights } from 'three/src/renderers/webgl/WebGLLights.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLLights = WebGLLights;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlLights.d.ts
consParams.webglLightsState = [
    'version',
    'hash',
    'ambient',
    'probe',
    'directional',
    'directionalShadow',
    'directionalShadowMap',
    'directionalShadowMatrix',
    'spot',
    'spotShadow',
    'spotShadowMap',
    'spotShadowMatrix',
    'rectArea',
    'point',
    'pointShadow',
    'pointShadowMap',
    'pointShadowMatrix',
    'hemi',
    'numSpotLightShadowsWithMaps',
    'numLightProbes',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlLights.d.ts
objParams.webglLightsState = [
    'version',
    'hash',
    'ambient',
    'probe',
    'directional',
    'directionalShadow',
    'directionalShadowMap',
    'directionalShadowMatrix',
    'spot',
    'spotShadow',
    'spotShadowMap',
    'spotShadowMatrix',
    'rectArea',
    'point',
    'pointShadow',
    'pointShadowMap',
    'pointShadowMatrix',
    'hemi',
    'numSpotLightShadowsWithMaps',
    'numLightProbes',
].distinct();
consParams.webglLights = [
    'extensions',
    'state',
].distinct();
objParams.webglLights = [
    'state',
].distinct();
defaults.webGLLights = {};
