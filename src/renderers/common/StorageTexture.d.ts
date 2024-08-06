import { Node } from '../../../three-types';
import StorageTexture from 'three/src/renderers/common/StorageTexture.js';
export { StorageTexture };
declare module '../../../lib/3/three' {
    interface Three {
        StorageTexture: typeof StorageTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            storageTexture: StorageTextureProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        storageTexture: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        storageTexture: string[];
    }
}
export type StorageTextureProps = Node<StorageTexture, typeof StorageTexture, {
    width?: number;
    height?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        storageTexture: Partial<{
            width?: number;
            height?: number;
        }>;
    }
}
//# sourceMappingURL=StorageTexture.d.ts.map