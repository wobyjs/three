import { Node } from '../../three-types';
import { VideoTexture } from 'three/src/textures/VideoTexture.js';
import { MagnificationTextureFilter, Mapping, MinificationTextureFilter, PixelFormat, TextureDataType, Wrapping } from 'three/src/constants.js';
export { VideoTexture } from 'three/src/textures/VideoTexture.js';
import './Texture';
declare module '../../lib/3/three' {
    interface Three {
        VideoTexture: typeof VideoTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            videoTexture: VideoTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        videoTexture: string[];
        textureImageData: string[];
        texture3dImageData: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        videoTexture: string[];
        textureImageData: string[];
        texture3dImageData: string[];
    }
}
export type VideoTextureProps = Node<VideoTexture, typeof VideoTexture, {
    video: HTMLVideoElement;
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
        videoTexture: Partial<{
            video: HTMLVideoElement;
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
//# sourceMappingURL=VideoTexture.d.ts.map