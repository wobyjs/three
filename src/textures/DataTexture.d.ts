import { Node } from '../../three-types';
import { ColorSpace, MagnificationTextureFilter, Mapping, MinificationTextureFilter, PixelFormat, TextureDataType, Wrapping } from 'three/src/constants.js';
import { DataTexture } from 'three/src/textures/DataTexture.js';
export { DataTexture } from 'three/src/textures/DataTexture.js';
declare module '../../lib/3/three' {
    interface Three {
        DataTexture: typeof DataTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dataTexture: DataTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        dataTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        dataTexture: string[];
    }
}
export type DataTextureProps = Node<DataTexture, typeof DataTexture, {
    data?: BufferSource | null;
    width?: number;
    height?: number;
    format?: PixelFormat;
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
        dataTexture: {
            data?: BufferSource | null;
            width?: number;
            height?: number;
            format?: PixelFormat;
            type?: TextureDataType;
            mapping?: Mapping;
            wrapS?: Wrapping;
            wrapT?: Wrapping;
            magFilter?: MagnificationTextureFilter;
            minFilter?: MinificationTextureFilter;
            anisotropy?: number;
            colorSpace?: ColorSpace;
        };
    }
}
//# sourceMappingURL=DataTexture.d.ts.map