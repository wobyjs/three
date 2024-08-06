import { WebGLArrayRenderTarget } from 'three/src/renderers/WebGLArrayRenderTarget.js';
export { WebGLArrayRenderTarget } from 'three/src/renderers/WebGLArrayRenderTarget.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './WebGLRenderTarget';
Three.WebGLArrayRenderTarget = WebGLArrayRenderTarget;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlArrayRenderTarget.d.ts
/**
 * This type of render target represents an array of textures.
 */
consParams.webglArrayRenderTarget = [
    /**
     * Creates a new WebGlArrayRenderTarget.
     *
     * @param width the width of the render target, in pixels. Default is `1`.
     * @param height the height of the render target, in pixels. Default is `1`.
     * @param depth the depth/layer count of the render target. Default is `1`.
     * @param options optional object that holds texture parameters for an auto-generated target texture and
     * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
     */
    'width',
    'height',
    'depth',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlArrayRenderTarget.d.ts
/**
 * This type of render target represents an array of textures.
 */
objParams.webglArrayRenderTarget = [...objParams.webglRenderTarget,
    /**
     * Creates a new WebGlArrayRenderTarget.
     *
     * @param width the width of the render target, in pixels. Default is `1`.
     * @param height the height of the render target, in pixels. Default is `1`.
     * @param depth the depth/layer count of the render target. Default is `1`.
     * @param options optional object that holds texture parameters for an auto-generated target texture and
     * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
     */
    'textures',
    /**
     * The texture property is overwritten with an instance of {@link DataArrayTexture}.
     */
    'texture',
].distinct();
defaults.webglArrayRenderTarget = { width: 1, height: 1, depth: 1 };
