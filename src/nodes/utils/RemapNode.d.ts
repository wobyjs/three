import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import RemapNode from 'three/src/nodes/utils/RemapNode.js';
export { RemapNode };
import '../core/NodeAttribute';
declare module '../../../lib/3/three' {
    interface Three {
        RemapNode: typeof RemapNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            remapNode: RemapNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        remapNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        remapNode: string[];
    }
}
export type RemapNodeProps = Node<RemapNode, typeof RemapNode, {
    node: ENode;
    inLowNode: ENode;
    inHighNode: ENode;
    outLowNode?: ENode;
    outHighNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        remapNode: Partial<{
            node: ENode;
            inLowNode: ENode;
            inHighNode: ENode;
            outLowNode?: ENode;
            outHighNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=RemapNode.d.ts.map