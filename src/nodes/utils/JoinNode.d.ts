import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import JoinNode from 'three/src/nodes/utils/JoinNode.js';
export { JoinNode };
import '../core/TempNode';
declare module '../../../lib/3/three' {
    interface Three {
        JoinNode: typeof JoinNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            joinNode: JoinNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        joinNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        joinNode: string[];
    }
}
export type JoinNodeProps = Node<JoinNode, typeof JoinNode, {
    nodes: ENode[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        joinNode: Partial<{
            nodes?: ENode[];
        }>;
    }
}
//# sourceMappingURL=JoinNode.d.ts.map