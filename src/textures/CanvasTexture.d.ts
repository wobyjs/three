import { CanvasTexture } from 'three/src/textures/CanvasTexture.js';
export { CanvasTexture } from 'three/src/textures/CanvasTexture.js';
import { Node } from '../../three-types';
import { MagnificationTextureFilter, Mapping, MinificationTextureFilter, PixelFormat, TextureDataType, Wrapping } from 'three/src/constants.js';
declare module '../../lib/3/three' {
    interface Three {
        CanvasTexture: typeof CanvasTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            canvasTexture: CanvasTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        canvasTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        canvasTexture: string[];
    }
}
export type CanvasTextureProps = Node<CanvasTexture, typeof CanvasTexture, {
    canvas: TexImageSource | OffscreenCanvas;
    mapping?: Mapping;
    wrapS?: Wrapping;
    wrapT?: Wrapping;
    magFilter?: MagnificationTextureFilter;
    minFilter?: MinificationTextureFilter;
    format?: PixelFormat;
    type?: TextureDataType;
    anisotropy?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        canvasTexture: Partial<{
            canvas: TexImageSource | OffscreenCanvas;
            mapping?: Mapping;
            wrapS?: Wrapping;
            wrapT?: Wrapping;
            magFilter?: MagnificationTextureFilter;
            minFilter?: MinificationTextureFilter;
            format?: PixelFormat;
            type?: TextureDataType;
            anisotropy?: number;
        }>;
    }
}
//# sourceMappingURL=CanvasTexture.d.ts.map