import { Node } from '../../three-types';
import { TypedArray } from 'three/src/core/BufferAttribute.js';
import { Layers } from 'three/src/core/Layers.js';
export { Layers } from 'three/src/core/Layers.js';
declare module '../../lib/3/three' {
    interface Three {
        Layers: typeof Layers;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            layers: LayersProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        layers: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        layers: string[];
    }
}
export type LayersProps = Node<Layers, typeof Layers, {
    array: TypedArray;
    itemSize: number;
    normalized?: boolean;
    meshPerAttribute?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        layers: Partial<{
            array: TypedArray;
            itemSize: number;
            normalized?: boolean;
            meshPerAttribute?: number;
        }>;
    }
}
//# sourceMappingURL=Layer.d.ts.map