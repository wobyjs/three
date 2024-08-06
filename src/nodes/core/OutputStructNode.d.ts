import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import OutputStructNode from 'three/src/nodes/core/OutputStructNode.js';
export { OutputStructNode };
declare module '../../../lib/3/three' {
    interface Three {
        OutputStructNode: typeof OutputStructNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outputStructNode: OutputStructNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        outputStructNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        outputStructNode: string[];
    }
}
export type OutputStructNodeProps = Node<OutputStructNode, typeof OutputStructNode, {
    members: ENode[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        outputStructNode: Partial<{
            members: ENode[];
        }>;
    }
}
//# sourceMappingURL=OutputStructNode.d.ts.map