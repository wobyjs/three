import { Node as ENode } from 'three/src/nodes/Nodes.js';
import HashNode from 'three/src/nodes/math/HashNode.js';
import { Node } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        HashNode: typeof HashNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hashNode: HashNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        hashNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        hashNode: string[];
    }
}
export type HashNodeProps = Node<HashNode, typeof HashNode, {
    seedNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        hashNode: Partial<{
            seedNode: ENode;
        }>;
    }
}
//# sourceMappingURL=HashNode.d.ts.map