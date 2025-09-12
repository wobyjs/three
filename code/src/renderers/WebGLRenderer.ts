import { Node, WrapAsString } from '../../three-types'
import { WebGLRenderer, WebGLRendererParameters } from 'three/src/renderers/WebGLRenderer.js'
export * from 'three/src/renderers/WebGLRenderer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'
import { Observable } from 'woby'

import './common/Renderer'
import { RendererEx, rendererEx } from './RendererEx'

declare module '../../lib/3/three'
{
    interface Three {
        WebGLRenderer: typeof WebGLRenderer
    }
}

Three.WebGLRenderer = WebGLRenderer

declare module 'three/src/renderers/WebGLRenderer.js' {
    interface WebGLRenderer {
        animation: () => void,
        pause: Observable<boolean>,
    }
}

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglRenderer: WebGLRendererProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        webglDebug: typeof webglDebug
        webglRenderer: WrapAsString<WebGLRendererParameters>
        webglRendererParameters: WrapAsString<WebGLRendererParameters>
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        webglRenderer: typeof _webglRenderer
        webglRendererParameters: typeof _webglRendererParameters
        webglDebug: typeof _webglDebug
    }
}



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

const webglDebug = ([
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
] as const).distinct()
consParams.webglDebug = webglDebug
/**
 * The WebGl renderer displays your beautifully crafted scenes using WebGl, if your device supports it.
 * This renderer has way better performance than CanvasRenderer.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGlRenderer.js|src/renderers/WebGlRenderer.js}
 */


consParams.webglRenderer = { ...consParams.webglRendererParameters }



const _webglRendererParameters = ([...rendererEx,
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
] as const).distinct()
objProps.webglRendererParameters = _webglRendererParameters


const _webglDebug = ([
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
] as const).distinct()
objProps.webglDebug = _webglDebug

/**
 * The WebGl renderer displays your beautifully crafted scenes using WebGl, if your device supports it.
 * This renderer has way better performance than CanvasRenderer.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGlRenderer.js|src/renderers/WebGlRenderer.js}
 */

const _webglRenderer = ([...objProps.renderer,
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
     * @default []
     */
    'clippingPlanes',
    /**
     * @default false
     */
    'localClippingEnabled',
    'extensions',
    /**
     * Color space used for output to HTMLCanvasElement. Supported values are
     * {@link SRGBColorSpace} and {@link SRGBColorSpace}.
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


    'setPixelRatio',
    'setDrawingBufferSize',

    /**
     * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
     */
    'setSize',
    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * (x, y) is the lower-left corner of the region.
     */
    'setViewport',
    /**
     * Sets the scissor area from (x, y) to (x + width, y + height).
     */
    'setScissor',
    /**
     * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
     */
    'setScissorTest',
    /**
     * Sets the custom opaque sort function for the WebGLRenderLists. Pass null to use the default painterSortStable function.
     */
    'setOpaqueSort',
    /**
     * Sets the custom transparent sort function for the WebGLRenderLists. Pass null to use the default reversePainterSortStable function.
     */
    'setTransparentSort',
    /**
     * Sets the clear color, using color for the color and alpha for the opacity.
     */
    'setClearColor',
    'setClearAlpha',
    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     */
    'clear',
    'clearTarget',
    'renderBufferDirect',
    /**
     * A build in function that can be used instead of requestAnimationFrame. For WebXR projects this function must be used.
     * @param callback The function will be called every available frame. If `null` is passed it will stop any already ongoing animation.
     */
    'setAnimationLoop',
    /**
     * @deprecated Use {@link WebGLRenderer#setAnimationLoop .setAnimationLoop()} instead.
     */
    'animate',
    /**
     * Compiles all materials in the scene with the camera. This is useful to precompile shaders before the first
     * rendering. If you want to add a 3D object to an existing scene, use the third optional parameter for applying the
     * target scene.
     * Note that the (target) scene's lighting should be configured before calling this method.
     */
    'compile',
    /**
     * Asynchronous version of {@link compile}(). The method returns a Promise that resolves when the given scene can be
     * rendered without unnecessary stalling due to shader compilation.
     * This method makes use of the KHR_parallel_shader_compile WebGL extension.
     */
    'compileAsync',
    /**
     * Render a scene or an object using a camera.
     * The render is done to a previously specified {@link WebGLRenderTarget#renderTarget .renderTarget} set by calling
     * {@link WebGLRenderer#setRenderTarget .setRenderTarget} or to the canvas as usual.
     *
     * By default render buffers are cleared before rendering but you can prevent this by setting the property
     * {@link WebGLRenderer#autoClear autoClear} to false. If you want to prevent only certain buffers being cleared
     * you can set either the {@link WebGLRenderer#autoClearColor autoClearColor},
     * {@link WebGLRenderer#autoClearStencil autoClearStencil} or {@link WebGLRenderer#autoClearDepth autoClearDepth}
     * properties to false. To forcibly clear one ore more buffers call {@link WebGLRenderer#clear .clear}.
     */
    'render',
    /**
     * Sets the active render target.
     *
     * @param renderTarget The {@link WebGLRenderTarget renderTarget} that needs to be activated. When `null` is given, the canvas is set as the active render target instead.
     * @param activeCubeFace Specifies the active cube side (PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5) of {@link WebGLCubeRenderTarget}.
     * @param activeMipmapLevel Specifies the active mipmap level.
     */
    'setRenderTarget',
    'readRenderTargetPixels',
    'readRenderTargetPixelsAsync',
    /**
     * Copies a region of the currently bound framebuffer into the selected mipmap level of the selected texture.
     * This region is defined by the size of the destination texture's mip level, offset by the input position.
     *
     * @param texture Specifies the destination texture.
     * @param position Specifies the pixel offset from which to copy out of the framebuffer.
     * @param level Specifies the destination mipmap level of the texture.
     */
    'copyFramebufferToTexture',
    /**
     * Copies the pixels of a texture in the bounds `srcRegion` in the destination texture starting from the given
     * position.
     *
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param srcRegion Specifies the bounds
     * @param dstPosition Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param level Specifies the destination mipmap level of the texture.
     */
    'copyTextureToTexture',
    /**
     * Copies the pixels of a texture in the bounds `srcRegion` in the destination texture starting from the given
     * position.
     *
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param srcRegion Specifies the bounds
     * @param dstPosition Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param level Specifies the destination mipmap level of the texture.
     */
    'copyTextureToTexture3D',
    /**
     * Initializes the given WebGLRenderTarget memory. Useful for initializing a render target so data can be copied
     * into it using {@link WebGLRenderer.copyTextureToTexture} before it has been rendered to.
     * @param target
     */
    'initRenderTarget',
    /**
     * Initializes the given texture. Can be used to preload a texture rather than waiting until first render (which can cause noticeable lags due to decode and GPU upload overhead).
     *
     * @param texture The texture to Initialize.
     */
    'initTexture',
    /**
     * @deprecated Use {@link WebGLRenderer#setScissorTest .setScissorTest()} instead.
     */
    'enableScissorTest',
] as const).distinct()

objProps.webglRenderer = _webglRenderer

export type WebGLRendererProps = Node<WebGLRenderer, typeof WebGLRenderer, WebGLRendererParameters & RendererEx>

declare module '../../lib/3/defaults' {
    interface defaults {
        webglRenderer: WebGLRendererParameters & RendererEx
    }
}

defaults.webglRenderer = {}

