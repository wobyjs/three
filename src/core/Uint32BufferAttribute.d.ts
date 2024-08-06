import { Node } from '../../three-types';
import { Uint32BufferAttribute } from 'three/src/core/BufferAttribute.js';
export { Uint32BufferAttribute } from 'three/src/core/BufferAttribute.js';
import './BufferAttribute';
declare module '../../lib/3/three' {
    interface Three {
        Uint32BufferAttribute: typeof Uint32BufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uint32BufferAttribute: Uint32BufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        uint32BufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        uint32BufferAttribute: string[];
    }
}
export type Uint32BufferAttributeProps = Node<Uint32BufferAttribute, typeof Uint32BufferAttribute, {
    array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
    itemSize: number;
    normalized?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        uint32BufferAttribute: Partial<{
            array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number;
            itemSize: number;
            normalized?: boolean;
        }>;
    }
}
//# sourceMappingURL=Uint32BufferAttribute.d.ts.map