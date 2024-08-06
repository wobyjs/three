import { Node } from '../../three-types';
import { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js';
export { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js';
declare module '../../lib/3/three' {
    interface Three {
        SphericalHarmonics3: typeof SphericalHarmonics3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sphericalHarmonics3: SphericalHarmonics3Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        sphericalHarmonics3: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        sphericalHarmonics3: string[];
    }
}
export type SphericalHarmonics3Props = Node<SphericalHarmonics3, typeof SphericalHarmonics3, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        sphericalHarmonics3: {};
    }
}
//# sourceMappingURL=SphericalHarmonics3.d.ts.map