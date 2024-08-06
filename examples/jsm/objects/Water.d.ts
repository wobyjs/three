import { WaterOptions, Water } from 'three/examples/jsm/objects/Water.js';
export * from 'three/examples/jsm/objects/Water.js';
import { Node } from '../../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        Water: typeof Water;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            water: WaterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        water: string[];
        waterOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        water: string[];
        waterOptions: string[];
    }
}
export type WaterProps = Node<Water, typeof Water, {
    geometry: BufferGeometry;
    options: WaterOptions;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        water: Partial<{
            geometry: BufferGeometry;
            options: WaterOptions;
        }>;
    }
}
//# sourceMappingURL=Water.d.ts.map