import { Node } from '../../three-types';
import { Uint16BufferAttribute } from 'three/src/core/BufferAttribute.js';
export { Uint16BufferAttribute } from 'three/src/core/BufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        Uint16BufferAttribute: typeof Uint16BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uint16BufferAttribute: Uint16BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        uint16BufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        uint16BufferAttribute: string[];
    }
}
export type Uint16BufferAttributeProps = Node<Uint16BufferAttribute, typeof Uint16BufferAttribute, {
    array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        uint16BufferAttribute: Partial<{
            array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=Uint16BufferAttribute.d.ts.map