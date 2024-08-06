import { Node } from '../../three-types';
import { Matrix4 } from 'three/src/math/Matrix4.js';
import './Matrix3';
declare module '../../lib/3/three' {
    interface Three {
        Matrix4: typeof Matrix4;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            matrix4: Matrix4Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        matrix4: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        matrix4: string[];
    }
}
export type Matrix4Props = Node<Matrix4, typeof Matrix4, {
    n11: number;
    n12: number;
    n13: number;
    n14: number;
    n21: number;
    n22: number;
    n23: number;
    n24: number;
    n31: number;
    n32: number;
    n33: number;
    n34: number;
    n41: number;
    n42: number;
    n43: number;
    n44: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        matrix4: Partial<{
            n11: number;
            n12: number;
            n13: number;
            n14: number;
            n21: number;
            n22: number;
            n23: number;
            n24: number;
            n31: number;
            n32: number;
            n33: number;
            n34: number;
            n41: number;
            n42: number;
            n43: number;
            n44: number;
        }>;
    }
}
//# sourceMappingURL=Matrix4.d.ts.map