import { Water2Options, Water as Water2 } from 'three/examples/jsm/objects/Water2.js';
export { Water2, Water2Options };
import { Node } from '../../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        Water2: typeof Water2;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            water2: Water2Props;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        water2: string[];
        water2Options: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        water2: string[];
        water2Options: string[];
    }
}
export type Water2Props = Node<Water2, typeof Water2, {
    geometry: BufferGeometry;
    options: Water2Options;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        water2: Partial<{
            geometry: BufferGeometry;
            options: Water2Options;
        }>;
    }
}
//# sourceMappingURL=Water2.d.ts.map