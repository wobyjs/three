import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import AONode from 'three/src/nodes/lighting/AONode.js';
export { AONode };
declare module '../../../lib/3/three' {
    interface Three {
        AONode: typeof AONode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            aoNode: AONodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        aoNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        aoNode: string[];
    }
}
export type AONodeProps = Node<AONode, typeof AONode, {
    aoNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        aoNode: {
            aoNode?: ENode | null;
        };
    }
}
//# sourceMappingURL=AONode.d.ts.map