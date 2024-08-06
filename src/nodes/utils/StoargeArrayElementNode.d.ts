import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import StorageBufferNode from 'three/src/nodes/accessors/StorageBufferNode.js';
import StoargeArrayElementNode from 'three/src/nodes/utils/StorageArrayElementNode.js';
export { StoargeArrayElementNode };
import './ArrayElementNode';
declare module '../../../lib/3/three' {
    interface Three {
        StoargeArrayElementNode: typeof StoargeArrayElementNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            storageArrayElementNode: StoargeArrayElementNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        storageArrayElementNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        storageArrayElementNode: string[];
    }
}
export type StoargeArrayElementNodeProps = Node<StoargeArrayElementNode, typeof StoargeArrayElementNode, {
    storageBufferNode: StorageBufferNode;
    indexNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        stoargeArrayElementNode: Partial<{
            storageBufferNode: StorageBufferNode;
            indexNode: ENode;
        }>;
    }
}
//# sourceMappingURL=StoargeArrayElementNode.d.ts.map