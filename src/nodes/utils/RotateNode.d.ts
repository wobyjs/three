import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import RotateNode from 'three/src/nodes/utils/RotateNode.js';
export { RotateNode };
import '../core/TempNode';
declare module '../../../lib/3/three' {
    interface Three {
        RotateNode: typeof RotateNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rotateNode: RotateNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        rotateNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        rotateNode: string[];
    }
}
export type RotateNodeProps = Node<RotateNode, typeof RotateNode, {
    positionNode: ENode;
    rotationNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        rotateNode: Partial<{
            positionNode: ENode;
            rotationNode: ENode;
        }>;
    }
}
//# sourceMappingURL=RotateNode.d.ts.map