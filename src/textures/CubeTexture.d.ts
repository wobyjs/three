import { Node } from '../../three-types';
import { ColorSpace, CubeTextureMapping, MagnificationTextureFilter, MinificationTextureFilter, PixelFormat, TextureDataType, Wrapping } from 'three/src/constants.js';
import { CubeTexture } from 'three/src/textures/CubeTexture.js';
export { CubeTexture } from 'three/src/textures/CubeTexture.js';
declare module '../../lib/3/three' {
    interface Three {
        CubeTexture: typeof CubeTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeTexture: CubeTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        cubeTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        cubeTexture: string[];
    }
}
export type CubeTextureProps = Node<CubeTexture, typeof CubeTexture, {
    images?: any[];
    mapping?: CubeTextureMapping;
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
        cubeTexture: {
            images?: any[];
            mapping?: CubeTextureMapping;
            wrapS?: Wrapping;
            wrapT?: Wrapping;
            magFilter?: MagnificationTextureFilter;
            minFilter?: MinificationTextureFilter;
            format?: PixelFormat;
            type?: TextureDataType;
            anisotropy?: number;
            colorSpace?: ColorSpace;
        };
    }
}
//# sourceMappingURL=CubeTexture.d.ts.map