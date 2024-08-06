import { Node } from '../../three-types';
import { Int32BufferAttribute } from 'three/src/core/BufferAttribute.js';
export { Int32BufferAttribute } from 'three/src/core/BufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        Int32BufferAttribute: typeof Int32BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            int32BufferAttribute: Int32BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        int32BufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        int32BufferAttribute: string[];
    }
}
export type Int32BufferAttributeProps = Node<Int32BufferAttribute, typeof Int32BufferAttribute, {
    array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        int32BufferAttribute: Partial<{
            array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=Int32BufferAttribute.d.ts.map