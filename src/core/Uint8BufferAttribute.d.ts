import { Node } from '../../three-types';
import { Uint8BufferAttribute } from 'three/src/core/BufferAttribute.js';
export { Uint8BufferAttribute } from 'three/src/core/BufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        Uint8BufferAttribute: typeof Uint8BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uint8BufferAttribute: Uint8BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        uint8BufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        uint8BufferAttribute: string[];
    }
}
export type Uint8BufferAttributeProps = Node<Uint8BufferAttribute, typeof Uint8BufferAttribute, {
    array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        uint8BufferAttribute: Partial<{
            array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=Uint8BufferAttribute.d.ts.map