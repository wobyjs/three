import { Node } from '../../three-types';
import { Float32BufferAttribute } from 'three/src/core/BufferAttribute.js';
export { Float32BufferAttribute } from 'three/src/core/BufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        Float32BufferAttribute: typeof Float32BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            float32BufferAttribute: Float32BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        float32BufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        float32BufferAttribute: string[];
    }
}
export type Float32BufferAttributeProps = Node<Float32BufferAttribute, typeof Float32BufferAttribute, {
    array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        float32BufferAttribute: Partial<{
            array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=Float32BufferAttribute.d.ts.map