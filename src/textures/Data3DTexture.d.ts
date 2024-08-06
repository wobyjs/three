import { Node } from '../../three-types';
import { Data3DTexture } from 'three/src/textures/Data3dTexture.js';
export { Data3DTexture } from 'three/src/textures/Data3dTexture.js';
declare module '../../lib/3/three' {
    interface Three {
        Data3dTexture: typeof Data3DTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            data3dTexture: Data3DTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        data3dTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        data3dTexture: string[];
    }
}
export type Data3DTextureProps = Node<Data3DTexture, typeof Data3DTexture, {
    data?: BufferSource | null;
    width?: number;
    height?: number;
    depth?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        data3DTexture: {
            data?: BufferSource | null;
            width?: number;
            height?: number;
            depth?: number;
        };
    }
}
//# sourceMappingURL=Data3DTexture.d.ts.map