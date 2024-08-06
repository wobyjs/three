import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import MathNode, { MathNodeMethod3 } from 'three/src/nodes/math/MathNode.js';
export { MathNode };
declare module '../../../lib/3/three' {
    interface Three {
        MathNode: typeof MathNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mathNode: MathNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        mathNode: string[];
        nodeElements: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        mathNode: string[];
        nodeElements: string[];
    }
}
export type MathNodeProps = Node<MathNode, typeof MathNode, {
    method: MathNodeMethod3;
    aNode?: ENode;
    bNode?: ENode;
    cNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        mathNode: Partial<{
            method: MathNodeMethod3;
            aNode?: ENode;
            bNode?: ENode;
            cNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=MathNode.d.ts.map