import { Node } from '../../three-types'
import {
    ClampToEdgeWrapping, ColorSpace, CompressedPixelFormat, LinearFilter, LinearMipmapLinearFilter, MagnificationTextureFilter,
    Mapping, MinificationTextureFilter, NoColorSpace, TextureDataType, UnsignedByteType, Wrapping
} from 'three/src/constants.js'
import { CompressedTexture } from 'three/src/textures/CompressedTexture.js'
export { CompressedTexture } from 'three/src/textures/CompressedTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        CompressedTexture: typeof CompressedTexture
    }
}

Three.CompressedTexture = CompressedTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            compressedTexture: CompressedTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        compressedTexture: typeof compressedTexture
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        compressedTexture: typeof _compressedTexture
    }
}


/**
 * Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface} file.
 * @remarks For use with the {@link THREE.CompressedTextureLoader}.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedTexture.js}
 */

const compressedTexture = ([
    /**
     * This creates a new {@link THREE.CompressedTexture} object.
     * @param mipmaps The mipmaps array should contain objects with data, width and height.
     * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
     * @param width The width of the biggest mipmap.
     * @param height The height of the biggest mipmap.
     * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace .colorSpace}. Default {@link NoColorSpace}
     */

    'mipmaps',
    'width',
    'height',
    'format',
    'type',
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'anisotropy',
    'colorSpace',
] as const).distinct()
consParams.compressedTexture = compressedTexture


/**
 * Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
 * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedTexture.js | Source}
 */

const _compressedTexture = ([...objProps.texture,
    /**
     * Overridden with a object containing width and height.
     * @override
     */
    'image',
    /**
     *  The mipmaps array should contain objects with data, width and height. The mipmaps should be of the correct {@link format} and {@link type}.
     */
    'mipmaps',
    /**
     * @override
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.CompressedPixelFormat}
     */
    'format',
    /**
     * @override No flipping for cube textures. (also flipping doesn't work for compressed textures)
     * @defaultValue `false`
     */
    'flipY',
    /**
     * @override Can't generate mipmaps for compressed textures. mips must be embedded in DDS files
     * @defaultValue `false`
     */
    'generateMipmaps',
] as const).distinct()
objProps.compressedTexture = _compressedTexture

export type CompressedTextureProps = Node<CompressedTexture, typeof CompressedTexture, { mipmaps: ImageData[]; width: number; height: number; format: CompressedPixelFormat; type?: TextureDataType; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; anisotropy?: number; colorSpace?: ColorSpace; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        compressedTexture: Partial<{ mipmaps: ImageData[]; width: number; height: number; format: CompressedPixelFormat; type?: TextureDataType; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; anisotropy?: number; colorSpace?: ColorSpace; }>
    }
}

defaults.compressedTexture = {
    type: UnsignedByteType,
    wrapS: ClampToEdgeWrapping,
    wrapT: ClampToEdgeWrapping,
    magFilter: LinearFilter,
    minFilter: LinearMipmapLinearFilter,
    anisotropy: 1,
    colorSpace: NoColorSpace,
}

