import { Node } from '../../three-types';
import { TypedArray } from 'three/src/core/BufferAttribute.js';
import { InstancedBufferAttribute } from 'three/src/core/InstancedBufferAttribute.js';
export { InstancedBufferAttribute } from 'three/src/core/InstancedBufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        InstancedBufferAttribute: typeof InstancedBufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instancedBufferAttribute: InstancedBufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        instancedBufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        instancedBufferAttribute: string[];
    }
}
export type InstancedBufferAttributeProps = Node<InstancedBufferAttribute, typeof InstancedBufferAttribute, {
    array: TypedArray;
    itemSize: number;
    normalized?: boolean;
    meshPerAttribute?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        instancedBufferAttribute: Partial<{
            array: TypedArray;
            itemSize: number;
            normalized?: boolean;
            meshPerAttribute?: number;
        }>;
    }
}
//# sourceMappingURL=InstancedBufferAttribute.d.ts.map