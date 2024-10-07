import { Node } from '../../three-types'
import { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js'
export { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        FramebufferTexture: typeof FramebufferTexture
    }
}

Three.FramebufferTexture = FramebufferTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            framebufferTexture: FramebufferTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        framebufferTexture: typeof framebufferTexture
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        framebufferTexture: typeof _framebufferTexture
    }
}


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

const framebufferTexture = ([
    /**
     * Create a new instance of {@link FramebufferTexture}
     * @param width The width of the texture.
     * @param height The height of the texture.
     */
    'width',
    'height',
] as const).distinct()
consParams.framebufferTexture = framebufferTexture


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

const _framebufferTexture = ([...objProps.texture,
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
] as const).distinct()
objProps.framebufferTexture = _framebufferTexture

export type FramebufferTextureProps = Node<FramebufferTexture, typeof FramebufferTexture, { width: number; height: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        framebufferTexture: Partial<{ width: number; height: number; }>
    }
}

defaults.framebufferTexture = {}

