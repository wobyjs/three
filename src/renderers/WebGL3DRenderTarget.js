import { WebGL3DRenderTarget } from 'three/src/renderers/WebGL3DRenderTarget.js';
export { WebGL3DRenderTarget } from 'three/src/renderers/WebGL3DRenderTarget.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.WebGL3DRenderTarget = WebGL3DRenderTarget;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGl3dRenderTarget.d.ts
/**
 * Represents a three-dimensional render target.
 */
consParams.webgl3dRenderTarget = [
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
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGl3dRenderTarget.d.ts
/**
 * Represents a three-dimensional render target.
 */
objParams.webgl3dRenderTarget = [...objParams.webglRenderTarget,
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
].distinct();
defaults.webgl3DRenderTarget = { width: 1, height: 1, depth: 1 };
