import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import CondNode from 'three/src/nodes/math/CondNode.js';
export { CondNode };
declare module '../../../lib/3/three' {
    interface Three {
        CondNode: typeof CondNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            condNode: CondNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        condNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        condNode: string[];
    }
}
export type CondNodeProps = Node<CondNode, typeof CondNode, {
    condNode: ENode;
    ifNode: ENode;
    elseNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        condNode: Partial<{
            condNode: ENode;
            ifNode: ENode;
            elseNode: ENode;
        }>;
    }
}
//# sourceMappingURL=CondNode.d.ts.map