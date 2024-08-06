import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import VarNode from 'three/src/nodes/core/VarNode.js';
export { VarNode };
declare module '../../../lib/3/three' {
    interface Three {
        VarNode: typeof VarNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            varNode: VarNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        varNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        varNode: string[];
    }
}
export type VarNodeProps = Node<VarNode, typeof VarNode, {
    node: ENode;
    name?: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        varNode: Partial<{
            node: ENode;
            name?: string | null;
        }>;
    }
}
//# sourceMappingURL=VarNode.d.ts.map