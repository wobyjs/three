import { Node } from '../../three-types';
import { ColorSpace, CompressedPixelFormat, MagnificationTextureFilter, Mapping, MinificationTextureFilter, TextureDataType, Wrapping } from 'three/src/constants.js';
import { CompressedCubeTexture } from 'three/src/textures/CompressedCubeTexture.js';
export { CompressedCubeTexture } from 'three/src/textures/CompressedCubeTexture.js';
import './CompressedTexture';
declare module '../../lib/3/three' {
    interface Three {
        CompressedCubeTexture: typeof CompressedCubeTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            compressedCubeTexture: CompressedCubeTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        compressedCubeTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        compressedCubeTexture: string[];
    }
}
export type CompressedCubeTextureProps = Node<CompressedCubeTexture, typeof CompressedCubeTexture, {
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
        compressedCubeTexture: Partial<{
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
//# sourceMappingURL=CompressedCubeTexture.d.ts.map