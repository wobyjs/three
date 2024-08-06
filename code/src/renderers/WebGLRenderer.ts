import { Node, WrapAsString } from '../../three-types'
import { WebGLRenderer, WebGLRendererParameters } from 'three/src/renderers/WebGLRenderer.js'
export * from 'three/src/renderers/WebGLRenderer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './common/Renderer'

declare module '../../lib/3/three'
{
    interface Three {
        WebGLRenderer: typeof WebGLRenderer
    }
}

Three.WebGLRenderer = WebGLRenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglRenderer: WebGLRendererProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        webglDebug: string[]
        webglRenderer: WrapAsString<WebGLRendererParameters>
        webglRendererParameters: WrapAsString<WebGLRendererParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        webglRenderer: string[]
        webglRendererParameters: string[]
        webglDebug: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderer.d.ts

consParams.webglRendererParameters = ([
    /**
     * A Canvas where the renderer draws its output.
     */
    'canvas',

    /**
     * A WebGl Rendering Context.
     * (https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext)
     * Default is null
     */
    'context',

    /**
     * shader precision. Can be "highp", "mediump" or "lowp".
     */
    'precision',

    /**
     * default is false.
     */
    'alpha',

    /**
     * default is true.
     */
    'premultipliedAlpha',

    /**
     * default is false.
     */
    'antialias',

    /**
     * default is false.
     */
    'stencil',

    /**
     * default is false.
     */
    'preserveDrawingBuffer',

    /**
     * Can be "high-performance", "low-power" or "default"
     */
    'powerPreference',

    /**
     * default is true.
     */
    'depth',

    /**
     * default is false.
     */
    'logarithmicDepthBuffer',

    /**
     * default is false.
     */
    'failIfMajorPerformanceCaveat',
] as const).toObject()

//@ts-ignore
consParams.webglDebug = [
    /**
     * Enables error checking and reporting when shader programs are being compiled.
     */
    'checkShaderErrors',
    /**
     * A callback function that can be used for custom error reporting. The callback receives the WebGl context, an
     * instance of WebGlProgram as well two instances of WebGlShader representing the vertex and fragment shader.
     * Assigning a custom function disables the default error reporting.
     * @default `null`
     */
    'onShaderError',
].distinct()
/**
 * The WebGl renderer displays your beautifully crafted scenes using WebGl, if your device supports it.
 * This renderer has way better performance than CanvasRenderer.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGlRenderer.js|src/renderers/WebGlRenderer.js}
 */


consParams.webglRenderer = { ...consParams.webglRendererParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderer.d.ts

objParams.webglRendererParameters = [
    /**
     * A Canvas where the renderer draws its output.
     */
    'canvas',
    /**
     * A WebGl Rendering Context.
     * (https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext)
     * Default is null
     */
    'context',
    /**
     * shader precision. Can be "highp", "mediump" or "lowp".
     */
    'precision',
    /**
     * default is false.
     */
    'alpha',
    /**
     * default is true.
     */
    'premultipliedAlpha',
    /**
     * default is false.
     */
    'antialias',
    /**
     * default is false.
     */
    'stencil',
    /**
     * default is false.
     */
    'preserveDrawingBuffer',
    /**
     * Can be "high-performance", "low-power" or "default"
     */
    'powerPreference',
    /**
     * default is true.
     */
    'depth',
    /**
     * default is false.
     */
    'logarithmicDepthBuffer',
    /**
     * default is false.
     */
    'failIfMajorPerformanceCaveat',
].distinct()


objParams.webglDebug = [
    /**
     * Enables error checking and reporting when shader programs are being compiled.
     */
    'checkShaderErrors',
    /**
     * A callback function that can be used for custom error reporting. The callback receives the WebGl context, an
     * instance of WebGlProgram as well two instances of WebGlShader representing the vertex and fragment shader.
     * Assigning a custom function disables the default error reporting.
     * @default `null`
     */
    'onShaderError',
].distinct()

/**
 * The WebGl renderer displays your beautifully crafted scenes using WebGl, if your device supports it.
 * This renderer has way better performance than CanvasRenderer.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGlRenderer.js|src/renderers/WebGlRenderer.js}
 */

objParams.webglRenderer = [...objParams.renderer,
    /**
     * parameters is an optional object with properties defining the renderer's behaviour.
     * The constructor also accepts no parameters at all.
     * In all cases, it will assume sane defaults when parameters are missing.
     */
    /**
     * A Canvas where the renderer draws its output.
     * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
     * @default document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' )
     */
    'domElement',
    /**
     * Defines whether the renderer should automatically clear its output before rendering.
     * @default true
     */
    'autoClear',
    /**
     * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
     * @default true
     */
    'autoClearColor',
    /**
     * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
     * @default true
     */
    'autoClearDepth',
    /**
     * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
     * @default true
     */
    'autoClearStencil',
    /**
     * Debug configurations.
     * @default { checkShaderErrors: true }
     */
    'debug',
    /**
     * Defines whether the renderer should sort objects. Default is true.
     * @default true
     */
    'sortObjects',
    /**
     * @default [].distinct()

     */
    'clippingPlanes',
    /**
     * @default false
     */
    'localClippingEnabled',
    'extensions',
    /**
     * Color space used for output to HTMLCanvasElement. Supported values are
     * {@link SRGBColorSpace} and {@link LinearSRGBColorSpace}.
     * @default THREE.SRGBColorSpace.
     */
    'outputColorSpace',
    /**
     * @deprecated Migrate your lighting according to the following guide:
     * https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.
     * @default true
     */
    'useLegacyLights',
    /**
     * @default THREE.NoToneMapping
     */
    'toneMapping',
    /**
     * @default 1
     */
    'toneMappingExposure',
    'info',
    'shadowMap',
    'pixelRatio',
    'capabilities',
    'properties',
    'renderLists',
    'state',
    'xr',
    /**
     * @deprecated Use {@link WebGlRenderer#xr .xr} instead.
     */
    'vr',
    /**
     * @deprecated Use {@link WebGlShadowMap#enabled .shadowMap.enabled} instead.
     */
    'shadowMapEnabled',
    /**
     * @deprecated Use {@link WebGlShadowMap#type .shadowMap.type} instead.
     */
    'shadowMapType',
    /**
     * @deprecated Use {@link WebGlShadowMap#cullFace .shadowMap.cullFace} instead.
     */
    'shadowMapCullFace',
].distinct()

export type WebGLRendererProps = Node<WebGLRenderer, typeof WebGLRenderer, WebGLRendererParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        webglRenderer: WebGLRendererParameters
    }
}

defaults.webglRenderer = {}
