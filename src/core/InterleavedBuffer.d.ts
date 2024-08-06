import { TypedArray } from 'three/src/core/BufferAttribute.js';
import { Node } from '../../three-types';
import { InterleavedBuffer } from 'three/src/core/InterleavedBuffer.js';
export { InterleavedBuffer } from 'three/src/core/InterleavedBuffer.js';
declare module '../../lib/3/three' {
    interface Three {
        InterleavedBuffer: typeof InterleavedBuffer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            interleavedBuffer: InterleavedBufferProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        interleavedBuffer: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        interleavedBuffer: string[];
    }
}
export type InterleavedBufferProps = Node<InterleavedBuffer, typeof InterleavedBuffer, {
    array: TypedArray;
    stride: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        interleavedBuffer: Partial<{
            array: TypedArray;
            stride: number;
        }>;
    }
}
//# sourceMappingURL=InterleavedBuffer.d.ts.map