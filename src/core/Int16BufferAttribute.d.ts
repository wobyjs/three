import { Node } from '../../three-types';
import { Int16BufferAttribute } from 'three/src/core/BufferAttribute.js';
export { Int16BufferAttribute } from 'three/src/core/BufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        Int16BufferAttribute: typeof Int16BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            int16BufferAttribute: Int16BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        int16BufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        int16BufferAttribute: string[];
    }
}
export type Int16BufferAttributeProps = Node<Int16BufferAttribute, typeof Int16BufferAttribute, {
    array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        int16BufferAttribute: Partial<{
            array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=Int16BufferAttribute.d.ts.map