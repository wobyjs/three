import { Object3DNode } from '../../../three-types';
import { BatchedMesh } from 'three/src/objects/BatchedMesh.js';
import BatchNode from 'three/src/nodes/accessors/BatchNode.js';
export { BatchNode };
declare module '../../../lib/3/three' {
    interface Three {
        BatchNode: typeof BatchNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            batchNode: BatchNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        batchNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        batchNode: string[];
    }
}
export type BatchNodeProps = Object3DNode<BatchNode, typeof BatchNode, {
    batchMesh: BatchedMesh;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        batchNode: Partial<{
            batchMesh: BatchedMesh;
        }>;
    }
}
//# sourceMappingURL=BatchNode.d.ts.map