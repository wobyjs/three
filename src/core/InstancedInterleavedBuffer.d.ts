import { Node } from '../../three-types';
import { TypedArray } from 'three/src/core/BufferAttribute.js';
import { InstancedInterleavedBuffer } from 'three/src/core/InstancedInterleavedBuffer.js';
export { InstancedInterleavedBuffer } from 'three/src/core/InstancedInterleavedBuffer.js';
import './InterleavedBuffer';
declare module '../../lib/3/three' {
    interface Three {
        InstancedInterleavedBuffer: typeof InstancedInterleavedBuffer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instancedInterleavedBuffer: InstancedInterleavedBufferProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        instancedInterleavedBuffer: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        instancedInterleavedBuffer: string[];
    }
}
export type InstancedInterleavedBufferProps = Node<InstancedInterleavedBuffer, typeof InstancedInterleavedBuffer, {
    array: TypedArray;
    stride: number;
    meshPerAttribute?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        instancedInterleavedBuffer: Partial<{
            array: TypedArray;
            stride: number;
            meshPerAttribute?: number;
        }>;
    }
}
//# sourceMappingURL=InstancedInterleavedBuffer.d.ts.map