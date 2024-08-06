import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import ComputeNode from 'three/src/nodes/gpgpu/ComputeNode.js';
export { ComputeNode };
declare module '../../../lib/3/three' {
    interface Three {
        ComputeNode: typeof ComputeNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            computeNode: ComputeNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        computeNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        computeNode: string[];
    }
}
export type ComputeNodeProps = Node<ComputeNode, typeof ComputeNode, {
    computeNode: ENode;
    count: number;
    workgroupSize?: number[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        computeNode: Partial<{
            computeNode: ENode;
            count: number;
            workgroupSize?: number[];
        }>;
    }
}
//# sourceMappingURL=ComputeNode.d.ts.map