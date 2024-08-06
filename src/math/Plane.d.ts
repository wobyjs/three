import { Node } from '../../three-types';
import { Plane } from 'three/src/math/Plane.js';
export { Plane } from 'three/src/math/Plane.js';
import { Vector3 } from 'three/src/math/Vector3';
declare module '../../lib/3/three' {
    interface Three {
        Plane: typeof Plane;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            plane: PlaneProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        plane: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        plane: string[];
    }
}
export type PlaneProps = Node<Plane, typeof Plane, {
    normal?: Vector3;
    constant?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        plane: {
            normal?: Vector3;
            constant?: number;
        };
    }
}
//# sourceMappingURL=Plane.d.ts.map