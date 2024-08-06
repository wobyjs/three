import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import AssignNode from 'three/src/nodes/core/AssignNode.js';
export { AssignNode };
declare module '../../../lib/3/three' {
    interface Three {
        AssignNode: typeof AssignNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            assignNode: AssignNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        assignNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        assignNode: string[];
    }
}
export type AssignNodeProps = Node<AssignNode, typeof AssignNode, {
    targetNode: ENode;
    sourceNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        assignNode: Partial<{
            targetNode: ENode;
            sourceNode: ENode;
        }>;
    }
}
//# sourceMappingURL=AssignNode.d.ts.map