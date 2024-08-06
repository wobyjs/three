import { Object3DNode } from '../../../three-types';
import StorageBufferAttribute from 'three/src/renderers/common/StorageBufferAttribute.js';
import StorageInstancedBufferAttribute from 'three/src/renderers/common/StorageInstancedBufferAttribute.js';
import StorageBufferNode from 'three/src/nodes/accessors/StorageBufferNode.js';
export { StorageBufferNode };
declare module '../../../lib/3/three' {
    interface Three {
        StorageBufferNode: typeof StorageBufferNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            storageBufferNode: StorageBufferNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        storageBufferNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        storageBufferNode: string[];
    }
}
export type StorageBufferNodeProps = Object3DNode<StorageBufferNode, typeof StorageBufferNode, {
    value: StorageBufferAttribute | StorageInstancedBufferAttribute;
    bufferType: string;
    bufferCount?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        storageBufferNode: Partial<{
            value: StorageBufferAttribute | StorageInstancedBufferAttribute;
            bufferType: string;
            bufferCount?: number;
        }>;
    }
}
//# sourceMappingURL=StorageBufferNode.d.ts.map