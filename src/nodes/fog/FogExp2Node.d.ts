import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import FogExp2Node from 'three/src/nodes/fog/FogExp2Node.js';
export { FogExp2Node };
declare module '../../../lib/3/three' {
    interface Three {
        FogExp2Node: typeof FogExp2Node;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogExp2Node: FogExp2NodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        fogExp2Node: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        fogExp2Node: string[];
    }
}
export type FogExp2NodeProps = Node<FogExp2Node, typeof FogExp2Node, {
    colorNode: ENode;
    densityNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        fogExp2Node: Partial<{
            colorNode: ENode;
            densityNode: ENode;
        }>;
    }
}
//# sourceMappingURL=FogExp2Node.d.ts.map