import { Node } from '../../../three-types';
import NodeCode from 'three/src/nodes/core/NodeCode.js';
export { NodeCode };
declare module '../../../lib/3/three' {
    interface Three {
        NodeCode: typeof NodeCode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeCode: NodeCodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeCode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeCode: string[];
    }
}
export type NodeCodeProps = Node<NodeCode, typeof NodeCode, {
    name: string;
    type: string;
    code?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeCode: Partial<{
            name: string;
            type: string;
            code?: string;
        }>;
    }
}
//# sourceMappingURL=NodeCode.d.ts.map