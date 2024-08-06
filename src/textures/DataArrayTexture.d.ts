import { Node } from '../../three-types';
import { DataArrayTexture } from 'three/src/textures/DataArrayTexture.js';
export { DataArrayTexture } from 'three/src/textures/DataArrayTexture.js';
declare module '../../lib/3/three' {
    interface Three {
        DataArrayTexture: typeof DataArrayTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dataArrayTexture: DataArrayTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        dataArrayTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        dataArrayTexture: string[];
    }
}
export type DataArrayTextureProps = Node<DataArrayTexture, typeof DataArrayTexture, {
    data?: BufferSource | null;
    width?: number;
    height?: number;
    depth?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        dataArrayTexture: {
            data?: BufferSource | null;
            width?: number;
            height?: number;
            depth?: number;
        };
    }
}
//# sourceMappingURL=DataArrayTexture.d.ts.map