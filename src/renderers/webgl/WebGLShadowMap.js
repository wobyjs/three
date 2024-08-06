import { WebGLShadowMap } from 'three/src/renderers/webgl/WebGLShadowMap.js';
export { WebGLShadowMap } from 'three/src/renderers/webgl/WebGLShadowMap.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLShadowMap = WebGLShadowMap;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShader.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShadowMap.d.ts
consParams.webglShadowMap = [
    '_renderer',
    '_objects',
    '_capabilities',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShader.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShadowMap.d.ts
objParams.webglShadowMap = [
    /**
     * @default false
     */
    'enabled',
    /**
     * @default true
     */
    'autoUpdate',
    /**
     * @default false
     */
    'needsUpdate',
    /**
     * @default THREE.PCFShadowMap
     */
    'type',
    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    'cullFace',
].distinct();
consParams.webglDepthBuffer = [].distinct();
consParams.webglStencilBuffer = [].distinct();
//@ts-ignore
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlState.d.ts
consParams.webglColorBuffer = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlState.d.ts
objParams.webglColorBuffer = [].distinct();
objParams.webglDepthBuffer = [].distinct();
objParams.webglStencilBuffer = [].distinct();
defaults.webGLShadowMap = {};
