import { Object3DNode } from '../../../three-types';
import { EllipseCurve } from 'three/src/extras/curves/EllipseCurve.js';
export { EllipseCurve } from 'three/src/extras/curves/EllipseCurve.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        EllipseCurve: typeof EllipseCurve;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ellipseCurve: EllipseCurveProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ellipseCurve: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ellipseCurve: string[];
    }
}
export type EllipseCurveProps = Object3DNode<EllipseCurve, typeof EllipseCurve, {
    aX?: number;
    aY?: number;
    xRadius?: number;
    yRadius?: number;
    aStartAngle?: number;
    aEndAngle?: number;
    aClockwise?: boolean;
    aRotation?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        ellipseCurve: Partial<{
            aX?: number;
            aY?: number;
            xRadius?: number;
            yRadius?: number;
            aStartAngle?: number;
            aEndAngle?: number;
            aClockwise?: boolean;
            aRotation?: number;
        }>;
    }
}
//# sourceMappingURL=EllipseCurve.d.ts.map