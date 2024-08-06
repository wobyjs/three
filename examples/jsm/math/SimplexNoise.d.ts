import { Node } from '../../../three-types';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
export * from 'three/examples/jsm/math/SimplexNoise.js';
declare module '../../../lib/3/three' {
    interface Three {
        SimplexNoise: typeof SimplexNoise;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            simplexNoise: SimplexNoiseProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        simplexNoise: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        simplexNoise: string[];
    }
}
export type SimplexNoiseProps = Node<SimplexNoise, typeof SimplexNoise, {
    r?: object;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        simplexNoise: Partial<{
            r?: object;
        }>;
    }
}
//# sourceMappingURL=SimplexNoise.d.ts.map