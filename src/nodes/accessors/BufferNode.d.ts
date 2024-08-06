import { Object3DNode } from '../../../three-types';
import BufferNode from 'three/src/nodes/accessors/BufferNode.js';
export { BufferNode };
declare module '../../../lib/3/three' {
    interface Three {
        BufferNode: typeof BufferNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferNode: BufferNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        bufferNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        bufferNode: string[];
    }
}
export type BufferNodeProps = Object3DNode<BufferNode, typeof BufferNode, {
    value: unknown;
    bufferType: string;
    bufferCount?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        bufferNode: Partial<{
            value: unknown;
            bufferType: string;
            bufferCount?: number;
        }>;
    }
}
//# sourceMappingURL=BufferNode.d.ts.map