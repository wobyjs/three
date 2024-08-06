import { Node } from '../../../three-types';
import UniformNode from 'three/src/nodes/core/UniformNode.js';
export { UniformNode };
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformNode: UniformNodeProps<unknown>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        uniformNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        uniformNode: string[];
    }
}
export type UniformNodeProps<T> = Node<UniformNode<T>, typeof UniformNode<T>, {
    value: T;
    nodeType?: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        uniformNode: Partial<{
            value: any;
            nodeType?: string | null;
        }>;
    }
}
//# sourceMappingURL=UniformNode.d.ts.map