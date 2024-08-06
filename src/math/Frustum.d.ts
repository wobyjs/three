import { Node } from '../../three-types';
import { Plane } from 'three/src/math/Plane.js';
import { Frustum } from 'three/src/math/Frustum.js';
export { Frustum } from 'three/src/math/Frustum.js';
declare module '../../lib/3/three' {
    interface Three {
        Frustum: typeof Frustum;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            frustum: FrustumProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        frustum: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        frustum: string[];
    }
}
export type FrustumProps = Node<Frustum, typeof Frustum, {
    p0?: Plane;
    p1?: Plane;
    p2?: Plane;
    p3?: Plane;
    p4?: Plane;
    p5?: Plane;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        frustum: {
            p0?: Plane;
            p1?: Plane;
            p2?: Plane;
            p3?: Plane;
            p4?: Plane;
            p5?: Plane;
        };
    }
}
//# sourceMappingURL=Frustum.d.ts.map