import { Object3DNode } from '../../../three-types';
import { ArcCurve } from 'three/src/extras/curves/ArcCurve.js';
export { ArcCurve } from 'three/src/extras/curves/ArcCurve.js';
import './EllipseCurve';
declare module '../../../lib/3/three' {
    interface Three {
        ArcCurve: typeof ArcCurve;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arcCurve: ArcCurveProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        arcCurve: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        arcCurve: string[];
    }
}
export type ArcCurveProps = Object3DNode<ArcCurve, typeof ArcCurve, {
    aX?: number;
    aY?: number;
    aRadius?: number;
    aStartAngle?: number;
    aEndAngle?: number;
    aClockwise?: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        arcCurve: Partial<{
            aX?: number;
            aY?: number;
            aRadius?: number;
            aStartAngle?: number;
            aEndAngle?: number;
            aClockwise?: boolean;
        }>;
    }
}
//# sourceMappingURL=ArcCurve.d.ts.map