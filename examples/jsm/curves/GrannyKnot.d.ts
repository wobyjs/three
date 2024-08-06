import type { GrannyKnot, HeartCurve, VivianiCurve, KnotCurve, HelixCurve, TrefoilKnot, TorusKnot, CinquefoilKnot, TrefoilPolynomialKnot, FigureEightPolynomialKnot, DecoratedTorusKnot4a, DecoratedTorusKnot4b, DecoratedTorusKnot5a, DecoratedTorusKnot5c } from 'three/examples/jsm/curves/CurveExtras.js';
import { Node } from '../../../three-types';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            grannyKnot: GrannyKnotProps;
            heartCurve: HeartCurveProps;
            vivianiCurve: VivianiCurveProps;
            knotCurve: KnotCurveProps;
            helixCurve: HelixCurveProps;
            trefoilKnot: TrefoilKnotProps;
            torusKnot: TorusKnotProps;
            cinquefoilKnot: CinquefoilKnotProps;
            trefoilPolynomialKnot: TrefoilPolynomialKnotProps;
            figureEightPolynomialKnot: FigureEightPolynomialKnotProps;
            decoratedTorusKnot4a: DecoratedTorusKnot4aProps;
            decoratedTorusKnot4b: DecoratedTorusKnot4bProps;
            decoratedTorusKnot5a: DecoratedTorusKnot5aProps;
            decoratedTorusKnot5c: DecoratedTorusKnot5cProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        grannyKnot: string[];
        heartCurve: string[];
        vivianiCurve: string[];
        knotCurve: string[];
        helixCurve: string[];
        trefoilKnot: string[];
        torusKnot: string[];
        cinquefoilKnot: string[];
        trefoilPolynomialKnot: string[];
        figureEightPolynomialKnot: string[];
        decoratedTorusKnot4a: string[];
        decoratedTorusKnot4b: string[];
        decoratedTorusKnot5a: string[];
        decoratedTorusKnot5c: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        grannyKnot: string[];
        heartCurve: string[];
        vivianiCurve: string[];
        knotCurve: string[];
        helixCurve: string[];
        trefoilKnot: string[];
        torusKnot: string[];
        cinquefoilKnot: string[];
        trefoilPolynomialKnot: string[];
        figureEightPolynomialKnot: string[];
        decoratedTorusKnot4a: string[];
        decoratedTorusKnot4b: string[];
        decoratedTorusKnot5a: string[];
        decoratedTorusKnot5c: string[];
    }
}
export type GrannyKnotProps = Node<GrannyKnot, typeof GrannyKnot, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        grannyKnot: Partial<{}>;
    }
}
export type HeartCurveProps = Node<HeartCurve, typeof HeartCurve, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        heartCurve: Partial<{
            scale?: number;
        }>;
    }
}
export type VivianiCurveProps = Node<VivianiCurve, typeof VivianiCurve, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        vivianiCurve: Partial<{
            scale?: number;
        }>;
    }
}
export type KnotCurveProps = Node<KnotCurve, typeof KnotCurve, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        knotCurve: Partial<{}>;
    }
}
export type HelixCurveProps = Node<HelixCurve, typeof HelixCurve, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        helixCurve: Partial<{}>;
    }
}
export type TrefoilKnotProps = Node<TrefoilKnot, typeof TrefoilKnot, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        trefoilKnot: Partial<{
            scale?: number;
        }>;
    }
}
export type TorusKnotProps = Node<TorusKnot, typeof TorusKnot, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        torusKnot: Partial<{
            scale?: number;
        }>;
    }
}
export type CinquefoilKnotProps = Node<CinquefoilKnot, typeof CinquefoilKnot, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cinquefoilKnot: Partial<{
            scale?: number;
        }>;
    }
}
export type TrefoilPolynomialKnotProps = Node<TrefoilPolynomialKnot, typeof TrefoilPolynomialKnot, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        trefoilPolynomialKnot: Partial<{
            scale?: number;
        }>;
    }
}
export type FigureEightPolynomialKnotProps = Node<FigureEightPolynomialKnot, typeof FigureEightPolynomialKnot, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        figureEightPolynomialKnot: Partial<{
            scale?: number;
        }>;
    }
}
export type DecoratedTorusKnot4aProps = Node<DecoratedTorusKnot4a, typeof DecoratedTorusKnot4a, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        decoratedTorusKnot4a: Partial<{
            scale?: number;
        }>;
    }
}
export type DecoratedTorusKnot4bProps = Node<DecoratedTorusKnot4b, typeof DecoratedTorusKnot4b, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        decoratedTorusKnot4b: Partial<{
            scale?: number;
        }>;
    }
}
export type DecoratedTorusKnot5aProps = Node<DecoratedTorusKnot5a, typeof DecoratedTorusKnot5a, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        decoratedTorusKnot5a: Partial<{
            scale?: number;
        }>;
    }
}
export type DecoratedTorusKnot5cProps = Node<DecoratedTorusKnot5c, typeof DecoratedTorusKnot5c, {
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        decoratedTorusKnot5c: Partial<{
            scale?: number;
        }>;
    }
}
//# sourceMappingURL=GrannyKnot.d.ts.map