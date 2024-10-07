import type { GrannyKnot, HeartCurve, VivianiCurve, KnotCurve, HelixCurve, TrefoilKnot, TorusKnot, CinquefoilKnot, TrefoilPolynomialKnot, FigureEightPolynomialKnot, DecoratedTorusKnot4a, DecoratedTorusKnot4b, DecoratedTorusKnot5a, DecoratedTorusKnot5c } from 'three/examples/jsm/curves/CurveExtras.js'
import { Node } from '../../../three-types'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            grannyKnot: GrannyKnotProps,
            heartCurve: HeartCurveProps,
            vivianiCurve: VivianiCurveProps,
            knotCurve: KnotCurveProps,
            helixCurve: HelixCurveProps,
            trefoilKnot: TrefoilKnotProps,
            torusKnot: TorusKnotProps,
            cinquefoilKnot: CinquefoilKnotProps,
            trefoilPolynomialKnot: TrefoilPolynomialKnotProps,
            figureEightPolynomialKnot: FigureEightPolynomialKnotProps,
            decoratedTorusKnot4a: DecoratedTorusKnot4aProps,
            decoratedTorusKnot4b: DecoratedTorusKnot4bProps,
            decoratedTorusKnot5a: DecoratedTorusKnot5aProps,
            decoratedTorusKnot5c: DecoratedTorusKnot5cProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        grannyKnot: typeof grannyKnot
        heartCurve: typeof heartCurve
        vivianiCurve: typeof vivianiCurve
        knotCurve: typeof knotCurve
        helixCurve: typeof helixCurve
        trefoilKnot: typeof trefoilKnot
        torusKnot: typeof torusKnot
        cinquefoilKnot: typeof cinquefoilKnot
        trefoilPolynomialKnot: typeof trefoilPolynomialKnot
        figureEightPolynomialKnot: typeof figureEightPolynomialKnot
        decoratedTorusKnot4a: typeof decoratedTorusKnot4a
        decoratedTorusKnot4b: typeof decoratedTorusKnot4b
        decoratedTorusKnot5a: typeof decoratedTorusKnot5a
        decoratedTorusKnot5c: typeof decoratedTorusKnot5c
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        grannyKnot: typeof _grannyKnot
        heartCurve: typeof _heartCurve
        vivianiCurve: typeof _vivianiCurve
        knotCurve: typeof _knotCurve
        helixCurve: typeof _helixCurve
        trefoilKnot: typeof _trefoilKnot
        torusKnot: typeof _torusKnot
        cinquefoilKnot: typeof _cinquefoilKnot
        trefoilPolynomialKnot: typeof _trefoilPolynomialKnot
        figureEightPolynomialKnot: typeof _figureEightPolynomialKnot
        decoratedTorusKnot4a: typeof _decoratedTorusKnot4a
        decoratedTorusKnot4b: typeof _decoratedTorusKnot4b
        decoratedTorusKnot5a: typeof _decoratedTorusKnot5a
        decoratedTorusKnot5c: typeof _decoratedTorusKnot5c
    }
}



const grannyKnot = ([
] as const).distinct()
consParams.grannyKnot = grannyKnot

const heartCurve = ([
    'scale',
] as const).distinct()
consParams.heartCurve = heartCurve

const vivianiCurve = ([
    'scale',
] as const).distinct()
consParams.vivianiCurve = vivianiCurve

const knotCurve = ([
] as const).distinct()
consParams.knotCurve = knotCurve

const helixCurve = ([
] as const).distinct()
consParams.helixCurve = helixCurve

const trefoilKnot = ([
    'scale',
] as const).distinct()
consParams.trefoilKnot = trefoilKnot

const torusKnot = ([
    'scale',
] as const).distinct()
consParams.torusKnot = torusKnot

const cinquefoilKnot = ([
    'scale',
] as const).distinct()
consParams.cinquefoilKnot = cinquefoilKnot

const trefoilPolynomialKnot = ([
    'scale',
] as const).distinct()
consParams.trefoilPolynomialKnot = trefoilPolynomialKnot

const figureEightPolynomialKnot = ([
    'scale',
] as const).distinct()
consParams.figureEightPolynomialKnot = figureEightPolynomialKnot

const decoratedTorusKnot4a = ([
    'scale',
] as const).distinct()
consParams.decoratedTorusKnot4a = decoratedTorusKnot4a

const decoratedTorusKnot4b = ([
    'scale',
] as const).distinct()
consParams.decoratedTorusKnot4b = decoratedTorusKnot4b

const decoratedTorusKnot5a = ([
    'scale',
] as const).distinct()
consParams.decoratedTorusKnot5a = decoratedTorusKnot5a

const decoratedTorusKnot5c = ([
    'scale',
] as const).distinct()
consParams.decoratedTorusKnot5c = decoratedTorusKnot5c



const _grannyKnot = ([...objProps.curve,
] as const).distinct()
objProps.grannyKnot = _grannyKnot

const _heartCurve = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.heartCurve = _heartCurve

const _vivianiCurve = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.vivianiCurve = _vivianiCurve

const _knotCurve = ([...objProps.curve,
] as const).distinct()
objProps.knotCurve = _knotCurve

const _helixCurve = ([...objProps.curve,
] as const).distinct()
objProps.helixCurve = _helixCurve

const _trefoilKnot = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.trefoilKnot = _trefoilKnot

const _torusKnot = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.torusKnot = _torusKnot

const _cinquefoilKnot = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.cinquefoilKnot = _cinquefoilKnot

const _trefoilPolynomialKnot = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.trefoilPolynomialKnot = _trefoilPolynomialKnot

const _figureEightPolynomialKnot = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.figureEightPolynomialKnot = _figureEightPolynomialKnot

const _decoratedTorusKnot4a = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.decoratedTorusKnot4a = _decoratedTorusKnot4a

const _decoratedTorusKnot4b = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.decoratedTorusKnot4b = _decoratedTorusKnot4b

const _decoratedTorusKnot5a = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.decoratedTorusKnot5a = _decoratedTorusKnot5a

const _decoratedTorusKnot5c = ([...objProps.curve,
    'scale',
] as const).distinct()
objProps.decoratedTorusKnot5c = _decoratedTorusKnot5c

// import NURBSUtils from 'three/examples/jsm/curves/NURBSUtils.js'
export type GrannyKnotProps = Node<GrannyKnot, typeof GrannyKnot, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        grannyKnot: Partial<{}>
    }
}

defaults.grannyKnot = {}

export type HeartCurveProps = Node<HeartCurve, typeof HeartCurve, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        heartCurve: Partial<{ scale?: number; }>
    }
}

defaults.heartCurve = {}

export type VivianiCurveProps = Node<VivianiCurve, typeof VivianiCurve, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vivianiCurve: Partial<{ scale?: number; }>
    }
}

defaults.vivianiCurve = {}

export type KnotCurveProps = Node<KnotCurve, typeof KnotCurve, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        knotCurve: Partial<{}>
    }
}

defaults.knotCurve = {}

export type HelixCurveProps = Node<HelixCurve, typeof HelixCurve, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        helixCurve: Partial<{}>
    }
}

defaults.helixCurve = {}

export type TrefoilKnotProps = Node<TrefoilKnot, typeof TrefoilKnot, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        trefoilKnot: Partial<{ scale?: number; }>
    }
}

defaults.trefoilKnot = {}

export type TorusKnotProps = Node<TorusKnot, typeof TorusKnot, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        torusKnot: Partial<{ scale?: number; }>
    }
}

defaults.torusKnot = {}

export type CinquefoilKnotProps = Node<CinquefoilKnot, typeof CinquefoilKnot, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cinquefoilKnot: Partial<{ scale?: number; }>
    }
}

defaults.cinquefoilKnot = {}

export type TrefoilPolynomialKnotProps = Node<TrefoilPolynomialKnot, typeof TrefoilPolynomialKnot, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        trefoilPolynomialKnot: Partial<{ scale?: number; }>
    }
}

defaults.trefoilPolynomialKnot = {}

export type FigureEightPolynomialKnotProps = Node<FigureEightPolynomialKnot, typeof FigureEightPolynomialKnot, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        figureEightPolynomialKnot: Partial<{ scale?: number; }>
    }
}

defaults.figureEightPolynomialKnot = {}

export type DecoratedTorusKnot4aProps = Node<DecoratedTorusKnot4a, typeof DecoratedTorusKnot4a, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        decoratedTorusKnot4a: Partial<{ scale?: number; }>
    }
}

defaults.decoratedTorusKnot4a = {}

export type DecoratedTorusKnot4bProps = Node<DecoratedTorusKnot4b, typeof DecoratedTorusKnot4b, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        decoratedTorusKnot4b: Partial<{ scale?: number; }>
    }
}

defaults.decoratedTorusKnot4b = {}

export type DecoratedTorusKnot5aProps = Node<DecoratedTorusKnot5a, typeof DecoratedTorusKnot5a, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        decoratedTorusKnot5a: Partial<{ scale?: number; }>
    }
}

defaults.decoratedTorusKnot5a = {}

export type DecoratedTorusKnot5cProps = Node<DecoratedTorusKnot5c, typeof DecoratedTorusKnot5c, { scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        decoratedTorusKnot5c: Partial<{ scale?: number; }>
    }
}

defaults.decoratedTorusKnot5c = {}

