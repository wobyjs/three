import { Node } from '../../three-types';
import { Euler, EulerOrder } from 'three/src/math/Euler.js';
declare module '../../lib/3/three' {
    interface Three {
        Euler: typeof Euler;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            euler: EulerProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        euler: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        euler: string[];
    }
}
export type EulerProps = Node<Euler, typeof Euler, {
    x?: number;
    y?: number;
    z?: number;
    order?: EulerOrder;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        euler: {
            x?: number;
            y?: number;
            z?: number;
            order?: EulerOrder;
        };
    }
}
//# sourceMappingURL=Euler.d.ts.map