import { Node } from '../../../three-types';
import NodeVar from 'three/src/nodes/core/NodeVar.js';
export { NodeVar };
declare module '../../../lib/3/three' {
    interface Three {
        NodeVar: typeof NodeVar;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeVar: NodeVarProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeVar: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeVar: string[];
    }
}
export type NodeVarProps = Node<NodeVar, typeof NodeVar, {
    name: string;
    type: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeVar: Partial<{
            name: string;
            type: string | null;
        }>;
    }
}
//# sourceMappingURL=NodeVar.d.ts.map