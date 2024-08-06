import { Node } from '../../three-types';
import { BufferAttribute, TypedArray } from 'three/src/core/BufferAttribute.js';
export * from 'three/src/core/BufferAttribute.js';
declare module '../../lib/3/three' {
    interface Three {
        BufferAttribute: typeof BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferAttribute: BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        bufferAttribute: string[];
        uint8ClampedBufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        bufferAttribute: string[];
        uint8ClampedBufferAttribute: string[];
    }
}
export type BufferAttributeProps = Node<BufferAttribute, typeof BufferAttribute, {
    array: TypedArray;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        bufferAttribute: Partial<{
            array: TypedArray;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=BufferAttribute.d.ts.map