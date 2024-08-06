import { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js';
export { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.FramebufferTexture = FramebufferTexture;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\FramebufferTexture.d.ts
/**
 * This class can only be used in combination with {@link THREE.WebGlRenderer.copyFramebufferToTexture.copyFramebufferToTexture()}.
 * @example
 * ```typescript
 * const pixelRatio = window.devicePixelRatio,
 * const textureSize = 128 * pixelRatio,
 *
 * // instantiate a framebuffer texture
 * const frameTexture = new FramebufferTexture( textureSize, textureSize, RGBAFormat ,
 *
 * // calculate start position for copying part of the frame data
 * const vector = new Vector2(,
 * vector.x = ( window.innerWidth * pixelRatio / 2 ) - ( textureSize / 2 ,
 * vector.y = ( window.innerHeight * pixelRatio / 2 ) - ( textureSize / 2 ,
 *
 * // render the scene
 * renderer.clear(,
 * renderer.render( scene, camera ,
 *
 * // copy part of the rendered frame into the framebuffer texture
 * renderer.copyFramebufferToTexture( vector, frameTexture ,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_framebuffer_texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/FramebufferTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/FramebufferTexture.js}
 */
consParams.framebufferTexture = [
    /**
     * Create a new instance of {@link FramebufferTexture}
     * @param width The width of the texture.
     * @param height The height of the texture.
     */
    'width',
    'height',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\FramebufferTexture.d.ts
/**
 * This class can only be used in combination with {@link THREE.webglRenderer.copyFramebufferToTexture | WebGlRenderer.copyFramebufferToTexture()}.
 * @example
 * ```typescript
 * const pixelRatio = window.devicePixelRatio
 * const textureSize = 128 * pixelRatio
 *
 * // instantiate a framebuffer texture
 * const frameTexture = new FramebufferTexture( textureSize, textureSize, RGBAFormat )
 *
 * // calculate start position for copying part of the frame data
 * const vector = new Vector2()
 * vector.x = ( window.innerWidth * pixelRatio / 2 ) - ( textureSize / 2 )
 * vector.y = ( window.innerHeight * pixelRatio / 2 ) - ( textureSize / 2 )
 *
 * // render the scene
 * renderer.clear()
 * renderer.render( scene, camera )
 *
 * // copy part of the rendered frame into the framebuffer texture
 * renderer.copyFramebufferToTexture( vector, frameTexture )
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_framebuffer_texture | webgl_framebuffer_texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/FramebufferTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/FramebufferTexture.js | Source}
 */
objParams.framebufferTexture = [...objParams.texture,
    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    'magFilter',
    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    'minFilter',
    /**
     * @override
     * @defaultValue `false`
     */
    'generateMipmaps',
].distinct();
defaults.framebufferTexture = {};
