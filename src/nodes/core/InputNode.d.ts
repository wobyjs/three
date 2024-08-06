import { Node } from '../../../three-types';
import InputNode from 'three/src/nodes/core/InputNode.js';
export { InputNode };
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            inputNode: InputNodeProps<any>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        inputNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        inputNode: string[];
    }
}
export type InputNodeProps<T> = Node<InputNode<T>, typeof InputNode<T>, {
    value: T;
    nodeType?: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        inputNode: Partial<{
            value: any;
            nodeType?: string | null;
        }>;
    }
}
//# sourceMappingURL=InputNode.d.ts.map