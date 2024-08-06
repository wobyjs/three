import { Node } from '../../../three-types';
import ConstNode from 'three/src/nodes/core/ConstNode.js';
export { ConstNode };
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            constNode: ConstNodeProps<unknown>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        constNode: string[];
        anyObject: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        constNode: string[];
        anyObject: string[];
    }
}
export type ConstNodeProps<T> = Node<ConstNode<T>, typeof ConstNode<T>, {
    value: T;
    nodeType?: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        constNode: Partial<{
            value: any;
            nodeType?: string | null;
        }>;
    }
}
//# sourceMappingURL=ConstNode.d.ts.map