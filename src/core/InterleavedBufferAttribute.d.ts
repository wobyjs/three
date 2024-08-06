import { Node } from '../../three-types';
import { InterleavedBuffer } from 'three/src/core/InterleavedBuffer.js';
import { InterleavedBufferAttribute } from 'three/src/core/InterleavedBufferAttribute.js';
export { InterleavedBufferAttribute } from 'three/src/core/InterleavedBufferAttribute.js';
declare module '../../lib/3/three' {
    interface Three {
        InterleavedBufferAttribute: typeof InterleavedBufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            interleavedBufferAttribute: InterleavedBufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        interleavedBufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        interleavedBufferAttribute: string[];
    }
}
export type InterleavedBufferAttributeProps = Node<InterleavedBufferAttribute, typeof InterleavedBufferAttribute, {
    interleavedBuffer: InterleavedBuffer;
    itemSize: number;
    offset: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        interleavedBufferAttribute: Partial<{
            interleavedBuffer: InterleavedBuffer;
            itemSize: number;
            offset: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=InterleavedBufferAttribute.d.ts.map