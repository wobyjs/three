import { Node } from '../../three-types';
import { Matrix2 } from 'three/src/math/Matrix2.js';
export * from 'three/src/math/Matrix2.js';
declare module '../../lib/3/three' {
    interface Three {
        Matrix2: typeof Matrix2;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            Matrix2: Matrix2Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        Matrix2: string[];
        matrix: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        Matrix2: string[];
        matrix: string[];
    }
}
export type Matrix2Props = Node<Matrix2, typeof Matrix2, {
    n11: number;
    n12: number;
    n21: number;
    n22: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        Matrix2: Partial<{
            n11: number;
            n12: number;
            n21: number;
            n22: number;
        }>;
    }
}
//# sourceMappingURL=Matrix2.d.ts.map