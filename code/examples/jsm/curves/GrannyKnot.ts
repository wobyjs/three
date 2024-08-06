import type { GrannyKnot, HeartCurve, VivianiCurve, KnotCurve, HelixCurve, TrefoilKnot, TorusKnot, CinquefoilKnot, TrefoilPolynomialKnot, FigureEightPolynomialKnot, DecoratedTorusKnot4a, DecoratedTorusKnot4b, DecoratedTorusKnot5a, DecoratedTorusKnot5c } from 'three/examples/jsm/curves/CurveExtras.js'
import { Node } from '../../../three-types'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        grannyKnot: string[]
        heartCurve: string[]
        vivianiCurve: string[]
        knotCurve: string[]
        helixCurve: string[]
        trefoilKnot: string[]
        torusKnot: string[]
        cinquefoilKnot: string[]
        trefoilPolynomialKnot: string[]
        figureEightPolynomialKnot: string[]
        decoratedTorusKnot4a: string[]
        decoratedTorusKnot4b: string[]
        decoratedTorusKnot5a: string[]
        decoratedTorusKnot5c: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        grannyKnot: string[]
        heartCurve: string[]
        vivianiCurve: string[]
        knotCurve: string[]
        helixCurve: string[]
        trefoilKnot: string[]
        torusKnot: string[]
        cinquefoilKnot: string[]
        trefoilPolynomialKnot: string[]
        figureEightPolynomialKnot: string[]
        decoratedTorusKnot4a: string[]
        decoratedTorusKnot4b: string[]
        decoratedTorusKnot5a: string[]
        decoratedTorusKnot5c: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\CurveExtras.d.ts

consParams.grannyKnot = [
].distinct()

consParams.heartCurve = [
    'scale',
].distinct()

consParams.vivianiCurve = [
    'scale',
].distinct()

consParams.knotCurve = [
].distinct()

consParams.helixCurve = [
].distinct()

consParams.trefoilKnot = [
    'scale',
].distinct()

consParams.torusKnot = [
    'scale',
].distinct()

consParams.cinquefoilKnot = [
    'scale',
].distinct()

consParams.trefoilPolynomialKnot = [
    'scale',
].distinct()

consParams.figureEightPolynomialKnot = [
    'scale',
].distinct()

consParams.decoratedTorusKnot4a = [
    'scale',
].distinct()

consParams.decoratedTorusKnot4b = [
    'scale',
].distinct()

consParams.decoratedTorusKnot5a = [
    'scale',
].distinct()

consParams.decoratedTorusKnot5c = [
    'scale',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\CurveExtras.d.ts    

objParams.grannyKnot = [...objParams.curve,
].distinct()

objParams.heartCurve = [...objParams.curve,
    'scale',
].distinct()

objParams.vivianiCurve = [...objParams.curve,
    'scale',
].distinct()

objParams.knotCurve = [...objParams.curve,
].distinct()

objParams.helixCurve = [...objParams.curve,
].distinct()

objParams.trefoilKnot = [...objParams.curve,
    'scale',
].distinct()

objParams.torusKnot = [...objParams.curve,
    'scale',
].distinct()

objParams.cinquefoilKnot = [...objParams.curve,
    'scale',
].distinct()

objParams.trefoilPolynomialKnot = [...objParams.curve,
    'scale',
].distinct()

objParams.figureEightPolynomialKnot = [...objParams.curve,
    'scale',
].distinct()

objParams.decoratedTorusKnot4a = [...objParams.curve,
    'scale',
].distinct()

objParams.decoratedTorusKnot4b = [...objParams.curve,
    'scale',
].distinct()

objParams.decoratedTorusKnot5a = [...objParams.curve,
    'scale',
].distinct()

objParams.decoratedTorusKnot5c = [...objParams.curve,
    'scale',
].distinct()

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

