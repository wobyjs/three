import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLShadowMap } from 'three/src/renderers/webgl/WebGLShadowMap.js'
import { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js'
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js'
export { WebGLShadowMap } from 'three/src/renderers/webgl/WebGLShadowMap.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLShadowMap: typeof WebGLShadowMap
    }
}

Three.WebGLShadowMap = WebGLShadowMap

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglShadowMap: WebGLShadowMapProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglShadowMap: string[]
        webglDepthBuffer: string[]
        webglStencilBuffer: string[]
        webglColorBuffer: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglShadowMap: string[]
        webglDepthBuffer: string[]
        webglStencilBuffer: string[]
        webglColorBuffer: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShader.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShadowMap.d.ts

consParams.webglShadowMap = [
    '_renderer',
    '_objects',
    '_capabilities',
].distinct()

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
].distinct()


consParams.webglDepthBuffer = [
].distinct()

consParams.webglStencilBuffer = [
].distinct()
//@ts-ignore

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlState.d.ts

consParams.webglColorBuffer = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlState.d.ts

objParams.webglColorBuffer = [
].distinct()


objParams.webglDepthBuffer = [
].distinct()


objParams.webglStencilBuffer = [
].distinct()

export type WebGLShadowMapProps = Node<WebGLShadowMap, typeof WebGLShadowMap, { _renderer: WebGLRenderer; _objects: WebGLObjects; _capabilities: WebGLCapabilities; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLShadowMap: Partial<{ _renderer: WebGLRenderer; _objects: WebGLObjects; _capabilities: WebGLCapabilities; }>
    }
}

defaults.webGLShadowMap = {}

