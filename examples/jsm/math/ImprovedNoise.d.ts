import { Node } from '../../../three-types';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';
export * from 'three/examples/jsm/math/ImprovedNoise.js';
declare module '../../../lib/3/three' {
    interface Three {
        ImprovedNoise: typeof ImprovedNoise;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            improvedNoise: ImprovedNoiseProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        improvedNoise: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        improvedNoise: string[];
    }
}
export type ImprovedNoiseProps = Node<ImprovedNoise, typeof ImprovedNoise, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        improvedNoise: Partial<{}>;
    }
}
//# sourceMappingURL=ImprovedNoise.d.ts.map