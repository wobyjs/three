import { Node } from '../../three-types';
import { Float16BufferAttribute } from 'three/src/core/BufferAttribute.js';
export { Float16BufferAttribute } from 'three/src/core/BufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        Float16BufferAttribute: typeof Float16BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            float16BufferAttribute: Float16BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        float16BufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        float16BufferAttribute: string[];
    }
}
export type Float16BufferAttributeProps = Node<Float16BufferAttribute, typeof Float16BufferAttribute, {
    array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        float16BufferAttribute: Partial<{
            array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=Float16BufferAttribute.d.ts.map