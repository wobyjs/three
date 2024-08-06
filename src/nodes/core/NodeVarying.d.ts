import { Node } from '../../../three-types';
import NodeVarying from 'three/src/nodes/core/NodeVarying.js';
export { NodeVarying };
declare module '../../../lib/3/three' {
    interface Three {
        NodeVarying: typeof NodeVarying;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeVarying: NodeVaryingProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeVarying: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeVarying: string[];
    }
}
export type NodeVaryingProps = Node<NodeVarying, typeof NodeVarying, {
    name: string;
    type: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeVarying: Partial<{
            name: string;
            type: string | null;
        }>;
    }
}
//# sourceMappingURL=NodeVarying.d.ts.map