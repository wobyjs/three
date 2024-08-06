import { Node } from '../../three-types';
import { Int8BufferAttribute } from 'three/src/core/BufferAttribute.js';
export { Int8BufferAttribute } from 'three/src/core/BufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        Int8BufferAttribute: typeof Int8BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            int8BufferAttribute: Int8BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        int8BufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        int8BufferAttribute: string[];
    }
}
export type Int8BufferAttributeProps = Node<Int8BufferAttribute, typeof Int8BufferAttribute, {
    array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        int8BufferAttribute: Partial<{
            array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=Int8BufferAttribute.d.ts.map