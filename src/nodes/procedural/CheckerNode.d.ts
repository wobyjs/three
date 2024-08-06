import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import CheckerNode from 'three/src/nodes/procedural/CheckerNode.js';
export { CheckerNode };
declare module '../../../lib/3/three' {
    interface Three {
        CheckerNode: typeof CheckerNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            checkerNode: CheckerNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        checkerNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        checkerNode: string[];
    }
}
export type CheckerNodeProps = Node<CheckerNode, typeof CheckerNode, {
    uvNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        checkerNode: Partial<{
            uvNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=CheckerNode.d.ts.map