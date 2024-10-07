import { Node } from '../../three-types'
import { CompressedPixelFormat, TextureDataType, UnsignedByteType } from 'three/src/constants.js'
import { CompressedArrayTexture } from 'three/src/textures/CompressedArrayTexture.js'
export { CompressedArrayTexture } from 'three/src/textures/CompressedArrayTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        CompressedArrayTexture: typeof CompressedArrayTexture
    }
}

Three.CompressedArrayTexture = CompressedArrayTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            compressedArrayTexture: CompressedArrayTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        compressedArrayTexture: typeof compressedArrayTexture
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        compressedArrayTexture: typeof _compressedArrayTexture
    }
}


/**
 * Creates an texture 2D array based on data in compressed form, for example from a
 * {@link https://en.wikipedia.org/wiki/DirectDraw_Surface} file.
 * @remarks For use with the {@link THREE.CompressedTextureLoader}.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedArrayTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedArrayTexture.js}
 */

const compressedArrayTexture = ([
    /**
     * Create a new instance of {@link CompressedArrayTexture}
     * @param mipmaps The mipmaps array should contain objects with data, width and height.
     * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
     * @param width The width of the biggest mipmap.
     * @param height The height of the biggest mipmap.
     * @param depth The number of layers of the 2D array texture
     * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     */

    'mipmaps',
    'width',
    'height',
    'depth',
    'format',
    'type',
] as const).distinct()
consParams.compressedArrayTexture = compressedArrayTexture


/**
 * Creates an texture 2d array based on data in compressed form, for example from a
 * {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
 * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedArrayTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedArrayTexture.js | Source}
 */

const _compressedArrayTexture = ([...objProps.compressedTexture,
    /**
     * Overridden with a object containing width and height.
     * @override
     */
    'image',
    /**
     * This defines how the texture is wrapped in the depth direction.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    'wrapR',
] as const).distinct()
objProps.compressedArrayTexture = _compressedArrayTexture


export type CompressedArrayTextureProps = Node<CompressedArrayTexture, typeof CompressedArrayTexture, { mipmaps: ImageData[]; width: number; height: number; depth: number; format: CompressedPixelFormat; type?: TextureDataType; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        compressedArrayTexture: Partial<{ mipmaps: ImageData[]; width: number; height: number; depth: number; format: CompressedPixelFormat; type?: TextureDataType; }>
    }
}

defaults.compressedArrayTexture = { type: UnsignedByteType }
