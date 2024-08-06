import { Node } from '../../../three-types';
import StackNode from 'three/src/nodes/core/StackNode.js';
export { StackNode };
declare module '../../../lib/3/three' {
    interface Three {
        StackNode: typeof StackNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stackNode: StackNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        stackNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        stackNode: string[];
    }
}
export type StackNodeProps = Node<StackNode, typeof StackNode, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        stackNode: {};
    }
}
//# sourceMappingURL=StackNode.d.ts.map