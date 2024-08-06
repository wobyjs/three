import { CanvasTexture } from 'three/src/textures/CanvasTexture.js'
export { CanvasTexture } from 'three/src/textures/CanvasTexture.js'
import { Node } from '../../three-types'
import {
    ClampToEdgeWrapping, LinearFilter, LinearMipmapLinearFilter, MagnificationTextureFilter, Mapping,
    MinificationTextureFilter, PixelFormat, TextureDataType, UnsignedByteType, Wrapping
} from 'three/src/constants.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        CanvasTexture: typeof CanvasTexture
    }
}

Three.CanvasTexture = CanvasTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            canvasTexture: CanvasTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        canvasTexture: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        canvasTexture: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CanvasTexture.d.ts
/**
 * Creates a texture from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas element}.
 * @remarks
 * This is almost the same as the base {@link Texture} class,
 * except that it sets {@link Texture.needsUpdate} to `true` immediately.
 * @see {@link THREE.Texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CanvasTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CanvasTexture.js}
 */

consParams.canvasTexture = [
    /**
     * This creates a new {@link THREE.CanvasTexture} object.
     * @param canvas The HTML canvas element from which to load the texture.
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     */

    'canvas',
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'format',
    'type',
    'anisotropy',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CanvasTexture.d.ts
/**
 * Creates a texture from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas | canvas element}.
 * @remarks
 * This is almost the same as the base {@link Texture | Texture} class,
 * except that it sets {@link Texture.needsUpdate | needsUpdate} to `true` immediately.
 * @see {@link THREE.Texture | Texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CanvasTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CanvasTexture.js | Source}
 */

objParams.canvasTexture = [...objParams.texture,
].distinct()

export type CanvasTextureProps = Node<CanvasTexture, typeof CanvasTexture, { canvas: TexImageSource | OffscreenCanvas; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        canvasTexture: Partial<{ canvas: TexImageSource | OffscreenCanvas; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; }>
    }
}

defaults.canvasTexture = {
    wrapS: ClampToEdgeWrapping,
    wrapT: ClampToEdgeWrapping,
    magFilter: LinearFilter,
    minFilter: LinearMipmapLinearFilter,
    type: UnsignedByteType,
    anisotropy: 1
}
