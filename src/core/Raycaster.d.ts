import { Node, Vector3, WrapAsString } from '../../three-types';
import { Raycaster, RaycasterParameters } from 'three/src/core/Raycaster.js';
export { Raycaster } from 'three/src/core/Raycaster.js';
import '../../lib/three/extensions';
declare module '../../lib/3/three' {
    interface Three {
        Raycaster: typeof Raycaster;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            raycaster: RaycasterProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        raycaster: string[];
        face: string[];
        intersection: string[];
        raycasterParameters: WrapAsString<RaycasterParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        raycaster: string[];
        face: string[];
        intersection: string[];
        raycasterParameters: string[];
    }
}
export type RaycasterProps = Node<Raycaster, typeof Raycaster, {
    origin?: Vector3;
    direction?: Vector3;
    near?: number;
    far?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        raycaster: Partial<{
            origin?: Vector3;
            direction?: Vector3;
            near?: number;
            far?: number;
        }>;
    }
}
//# sourceMappingURL=Raycaster.d.ts.map