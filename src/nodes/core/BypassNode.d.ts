import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import BypassNode from 'three/src/nodes/core/BypassNode.js';
export { BypassNode };
declare module '../../../lib/3/three' {
    interface Three {
        BypassNode: typeof BypassNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bypassNode: BypassNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        bypassNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        bypassNode: string[];
    }
}
export type BypassNodeProps = Node<BypassNode, typeof BypassNode, {
    returnNode: ENode;
    callNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        bypassNode: Partial<{
            returnNode: ENode;
            callNode: ENode;
        }>;
    }
}
//# sourceMappingURL=BypassNode.d.ts.map