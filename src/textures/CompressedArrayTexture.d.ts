import { Node } from '../../three-types';
import { CompressedPixelFormat, TextureDataType } from 'three/src/constants.js';
import { CompressedArrayTexture } from 'three/src/textures/CompressedArrayTexture.js';
export { CompressedArrayTexture } from 'three/src/textures/CompressedArrayTexture.js';
declare module '../../lib/3/three' {
    interface Three {
        CompressedArrayTexture: typeof CompressedArrayTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            compressedArrayTexture: CompressedArrayTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        compressedArrayTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        compressedArrayTexture: string[];
    }
}
export type CompressedArrayTextureProps = Node<CompressedArrayTexture, typeof CompressedArrayTexture, {
    mipmaps: ImageData[];
    width: number;
    height: number;
    depth: number;
    format: CompressedPixelFormat;
    type?: TextureDataType;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        compressedArrayTexture: Partial<{
            mipmaps: ImageData[];
            width: number;
            height: number;
            depth: number;
            format: CompressedPixelFormat;
            type?: TextureDataType;
        }>;
    }
}
//# sourceMappingURL=CompressedArrayTexture.d.ts.map