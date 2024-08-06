import { Node } from '../../three-types';
import { Matrix3 } from 'three/src/math/Matrix3.js';
export * from 'three/src/math/Matrix3.js';
declare module '../../lib/3/three' {
    interface Three {
        Matrix3: typeof Matrix3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            matrix3: Matrix3Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        matrix3: string[];
        matrix: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        matrix3: string[];
        matrix: string[];
    }
}
export type Matrix3Props = Node<Matrix3, typeof Matrix3, {
    n11: number;
    n12: number;
    n13: number;
    n21: number;
    n22: number;
    n23: number;
    n31: number;
    n32: number;
    n33: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        matrix3: Partial<{
            n11: number;
            n12: number;
            n13: number;
            n21: number;
            n22: number;
            n23: number;
            n31: number;
            n32: number;
            n33: number;
        }>;
    }
}
//# sourceMappingURL=Matrix3.d.ts.map