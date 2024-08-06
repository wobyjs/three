import { Node } from '../../three-types';
import { ColorSpace, CompressedPixelFormat, MagnificationTextureFilter, Mapping, MinificationTextureFilter, TextureDataType, Wrapping } from 'three/src/constants.js';
import { CompressedTexture } from 'three/src/textures/CompressedTexture.js';
export { CompressedTexture } from 'three/src/textures/CompressedTexture.js';
declare module '../../lib/3/three' {
    interface Three {
        CompressedTexture: typeof CompressedTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            compressedTexture: CompressedTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        compressedTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        compressedTexture: string[];
    }
}
export type CompressedTextureProps = Node<CompressedTexture, typeof CompressedTexture, {
    mipmaps: ImageData[];
    width: number;
    height: number;
    format: CompressedPixelFormat;
    type?: TextureDataType;
    mapping?: Mapping;
    wrapS?: Wrapping;
    wrapT?: Wrapping;
    magFilter?: MagnificationTextureFilter;
    minFilter?: MinificationTextureFilter;
    anisotropy?: number;
    colorSpace?: ColorSpace;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        compressedTexture: Partial<{
            mipmaps: ImageData[];
            width: number;
            height: number;
            format: CompressedPixelFormat;
            type?: TextureDataType;
            mapping?: Mapping;
            wrapS?: Wrapping;
            wrapT?: Wrapping;
            magFilter?: MagnificationTextureFilter;
            minFilter?: MinificationTextureFilter;
            anisotropy?: number;
            colorSpace?: ColorSpace;
        }>;
    }
}
//# sourceMappingURL=CompressedTexture.d.ts.map