import { Node, Vector3 } from '../../three-types';
import { Ray } from 'three/src/math/Ray.js';
export { Ray } from 'three/src/math/Ray.js';
declare module '../../lib/3/three' {
    interface Three {
        Ray: typeof Ray;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ray: RayProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        ray: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        ray: string[];
    }
}
export type RayProps = Node<Ray, typeof Ray, {
    origin?: Vector3;
    direction?: Vector3;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        ray: {
            origin?: Vector3;
            direction?: Vector3;
        };
    }
}
//# sourceMappingURL=Ray.d.ts.map