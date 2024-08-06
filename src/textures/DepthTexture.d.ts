import { Node } from '../../three-types';
import { DepthTexturePixelFormat, MagnificationTextureFilter, Mapping, MinificationTextureFilter, TextureDataType, Wrapping } from 'three/src/constants.js';
import { DepthTexture } from 'three/src/textures/DepthTexture.js';
export { DepthTexture } from 'three/src/textures/DepthTexture.js';
declare module '../../lib/3/three' {
    interface Three {
        DepthTexture: typeof DepthTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            depthTexture: DepthTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        depthTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        depthTexture: string[];
    }
}
export type DepthTextureProps = Node<DepthTexture, typeof DepthTexture, {
    width: number;
    height: number;
    type?: TextureDataType;
    mapping?: Mapping;
    wrapS?: Wrapping;
    wrapT?: Wrapping;
    magFilter?: MagnificationTextureFilter;
    minFilter?: MinificationTextureFilter;
    anisotropy?: number;
    format?: DepthTexturePixelFormat;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        depthTexture: Partial<{
            width: number;
            height: number;
            type?: TextureDataType;
            mapping?: Mapping;
            wrapS?: Wrapping;
            wrapT?: Wrapping;
            magFilter?: MagnificationTextureFilter;
            minFilter?: MinificationTextureFilter;
            anisotropy?: number;
            format?: DepthTexturePixelFormat;
        }>;
    }
}
//# sourceMappingURL=DepthTexture.d.ts.map