import { Node, Vector3 } from '../../three-types';
import { Sphere } from 'three/src/math/Sphere.js';
export { Sphere } from 'three/src/math/Sphere.js';
declare module '../../lib/3/three' {
    interface Three {
        Sphere: typeof Sphere;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sphere: SphereProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        sphere: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        sphere: string[];
    }
}
export type SphereProps = Node<Sphere, typeof Sphere, {
    center?: Vector3;
    radius?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        sphere: {
            center?: Vector3;
            radius?: number;
        };
    }
}
//# sourceMappingURL=Sphere.d.ts.map