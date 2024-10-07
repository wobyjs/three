import { Node } from '../../three-types'
import { WebGL3DRenderTarget } from 'three/src/renderers/WebGL3DRenderTarget.js'
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js'
export { WebGL3DRenderTarget } from 'three/src/renderers/WebGL3DRenderTarget.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        WebGL3DRenderTarget: typeof WebGL3DRenderTarget
    }
}

Three.WebGL3DRenderTarget = WebGL3DRenderTarget

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webgl3dRenderTarget: WebGL3DRenderTargetProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        webgl3dRenderTarget: typeof webgl3dRenderTarget
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        webgl3dRenderTarget: typeof _webgl3dRenderTarget
    }
}


/**
 * Represents a three-dimensional render target.
 */

const webgl3dRenderTarget = ([
    /**
     * Creates a new WebGl3dRenderTarget.
     *
     * @param width the width of the render target, in pixels. Default is `1`.
     * @param height the height of the render target, in pixels. Default is `1`.
     * @param depth the depth of the render target. Default is `1`.
     * @param options optional object that holds texture parameters for an auto-generated target texture and
     * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
     */
    'width',
    'height',
    'depth',
    'options',
] as const).distinct()
consParams.webgl3dRenderTarget = webgl3dRenderTarget


/**
 * Represents a three-dimensional render target.
 */

const _webgl3dRenderTarget = ([...objProps.webglRenderTarget,
    /**
     * Creates a new WebGl3dRenderTarget.
     *
     * @param width the width of the render target, in pixels. Default is `1`.
     * @param height the height of the render target, in pixels. Default is `1`.
     * @param depth the depth of the render target. Default is `1`.
     * @param options optional object that holds texture parameters for an auto-generated target texture and
     * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
     */
    'textures',
    /**
     * The texture property is overwritten with an instance of {@link Data3dTexture}.
     */
    'texture',
] as const).distinct()
objProps.webgl3dRenderTarget = _webgl3dRenderTarget


export type WebGL3DRenderTargetProps = Node<WebGL3DRenderTarget, typeof WebGL3DRenderTarget, { width?: number; height?: number; depth?: number; options?: RenderTargetOptions; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        webgl3DRenderTarget: { width?: number; height?: number; depth?: number; options?: RenderTargetOptions; }
    }
}

defaults.webgl3DRenderTarget = { width: 1, height: 1, depth: 1 }
