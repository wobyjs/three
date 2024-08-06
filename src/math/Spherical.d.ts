import { Node } from '../../three-types';
import { Spherical } from 'three/src/math/Spherical.js';
export { Spherical } from 'three/src/math/Spherical.js';
declare module '../../lib/3/three' {
    interface Three {
        Spherical: typeof Spherical;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spherical: SphericalProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        spherical: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        spherical: string[];
    }
}
export type SphericalProps = Node<Spherical, typeof Spherical, {
    radius?: number;
    phi?: number;
    theta?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        spherical: {
            radius?: number;
            phi?: number;
            theta?: number;
        };
    }
}
//# sourceMappingURL=Spherical.d.ts.map