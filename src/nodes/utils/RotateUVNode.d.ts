import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import RotateUVNode from 'three/src/nodes/utils/RotateUVNode.js';
export { RotateUVNode };
import '../core/TempNode';
declare module '../../../lib/3/three' {
    interface Three {
        RotateUVNode: typeof RotateUVNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rotateUvNode: RotateUVNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        rotateUvNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        rotateUvNode: string[];
    }
}
export type RotateUVNodeProps = Node<RotateUVNode, typeof RotateUVNode, {
    uvNode: ENode;
    rotationNode: ENode;
    centerNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        rotateUvNode: Partial<{
            uvNode: ENode;
            rotationNode: ENode;
            centerNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=RotateUVNode.d.ts.map