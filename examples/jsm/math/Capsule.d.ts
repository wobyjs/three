import { Node, Vector3 } from '../../../three-types';
import { Capsule } from 'three/examples/jsm/math/Capsule.js';
export * from 'three/examples/jsm/math/Capsule.js';
declare module '../../../lib/3/three' {
    interface Three {
        Capsule: typeof Capsule;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            capsule: CapsuleProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        capsule: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        capsule: string[];
    }
}
export type CapsuleProps = Node<Capsule, typeof Capsule, {
    start?: Vector3;
    end?: Vector3;
    radius?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        capsule: Partial<{
            start?: Vector3;
            end?: Vector3;
            radius?: number;
        }>;
    }
}
//# sourceMappingURL=Capsule.d.ts.map