import { Node } from '../../three-types';
import { Texture } from 'three/src/textures/Texture.js';
import { ColorSpace, MagnificationTextureFilter, Mapping, MinificationTextureFilter, PixelFormat, TextureDataType, Wrapping } from 'three/src/constants.js';
export { Texture } from 'three/src/textures/Texture.js';
declare module '../../lib/3/three' {
    interface Three {
        Texture: typeof Texture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            texture: TextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        texture: string[];
        eventTarget: string[];
        offscreenCanvas: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        texture: string[];
        eventTarget: string[];
        offscreenCanvas: string[];
    }
}
export type TextureProps = Node<Texture, typeof Texture, {
    image?: TexImageSource | OffscreenCanvas;
    mapping?: Mapping;
    wrapS?: Wrapping;
    wrapT?: Wrapping;
    magFilter?: MagnificationTextureFilter;
    minFilter?: MinificationTextureFilter;
    format?: PixelFormat;
    type?: TextureDataType;
    anisotropy?: number;
    colorSpace?: ColorSpace;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        texture: Partial<{
            image?: TexImageSource | OffscreenCanvas;
            mapping?: Mapping;
            wrapS?: Wrapping;
            wrapT?: Wrapping;
            magFilter?: MagnificationTextureFilter;
            minFilter?: MinificationTextureFilter;
            format?: PixelFormat;
            type?: TextureDataType;
            anisotropy?: number;
            colorSpace?: ColorSpace;
        }>;
    }
}
//# sourceMappingURL=Texture.d.ts.map