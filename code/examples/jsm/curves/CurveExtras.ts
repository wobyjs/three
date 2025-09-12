import {
    GrannyKnot,
    HeartCurve,
    VivianiCurve,
    KnotCurve,
    HelixCurve,
    TrefoilKnot,
    TorusKnot,
    CinquefoilKnot,
    TrefoilPolynomialKnot,
    FigureEightPolynomialKnot,
    DecoratedTorusKnot4a,
    DecoratedTorusKnot4b,
    DecoratedTorusKnot5a,
    DecoratedTorusKnot5c
} from 'three/examples/jsm/curves/CurveExtras.js'

export * from 'three/examples/jsm/curves/CurveExtras.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three' {
    interface Three {
        GrannyKnot: typeof GrannyKnot
        HeartCurve: typeof HeartCurve
        VivianiCurve: typeof VivianiCurve
        KnotCurve: typeof KnotCurve
        HelixCurve: typeof HelixCurve
        TrefoilKnot: typeof TrefoilKnot
        TorusKnot: typeof TorusKnot
        CinquefoilKnot: typeof CinquefoilKnot
        TrefoilPolynomialKnot: typeof TrefoilPolynomialKnot
        FigureEightPolynomialKnot: typeof FigureEightPolynomialKnot
        DecoratedTorusKnot4a: typeof DecoratedTorusKnot4a
        DecoratedTorusKnot4b: typeof DecoratedTorusKnot4b
        DecoratedTorusKnot5a: typeof DecoratedTorusKnot5a
        DecoratedTorusKnot5c: typeof DecoratedTorusKnot5c
    }
}

Three.GrannyKnot = GrannyKnot
Three.HeartCurve = HeartCurve
Three.VivianiCurve = VivianiCurve
Three.KnotCurve = KnotCurve
Three.HelixCurve = HelixCurve
Three.TrefoilKnot = TrefoilKnot
Three.TorusKnot = TorusKnot
Three.CinquefoilKnot = CinquefoilKnot
Three.TrefoilPolynomialKnot = TrefoilPolynomialKnot
Three.FigureEightPolynomialKnot = FigureEightPolynomialKnot
Three.DecoratedTorusKnot4a = DecoratedTorusKnot4a
Three.DecoratedTorusKnot4b = DecoratedTorusKnot4b
Three.DecoratedTorusKnot5a = DecoratedTorusKnot5a
Three.DecoratedTorusKnot5c = DecoratedTorusKnot5c

// Setup consParams and objProps using the established pattern
const grannyKnot = ([] as const).distinct()
const _grannyKnot = ([] as const).distinct()
const heartCurve = (['scale'] as const).distinct()
const _heartCurve = (['scale'] as const).distinct()
const vivianiCurve = (['scale'] as const).distinct()
const _vivianiCurve = (['scale'] as const).distinct()
const knotCurve = ([] as const).distinct()
const _knotCurve = ([] as const).distinct()
const helixCurve = ([] as const).distinct()
const _helixCurve = ([] as const).distinct()
const trefoilKnot = (['scale'] as const).distinct()
const _trefoilKnot = (['scale'] as const).distinct()
const torusKnot = (['scale'] as const).distinct()
const _torusKnot = (['scale'] as const).distinct()
const cinquefoilKnot = (['scale'] as const).distinct()
const _cinquefoilKnot = (['scale'] as const).distinct()
const trefoilPolynomialKnot = (['scale'] as const).distinct()
const _trefoilPolynomialKnot = (['scale'] as const).distinct()
const figureEightPolynomialKnot = (['scale'] as const).distinct()
const _figureEightPolynomialKnot = (['scale'] as const).distinct()
const decoratedTorusKnot4a = (['scale'] as const).distinct()
const _decoratedTorusKnot4a = (['scale'] as const).distinct()
const decoratedTorusKnot4b = (['scale'] as const).distinct()
const _decoratedTorusKnot4b = (['scale'] as const).distinct()
const decoratedTorusKnot5a = (['scale'] as const).distinct()
const _decoratedTorusKnot5a = (['scale'] as const).distinct()
const decoratedTorusKnot5c = (['scale'] as const).distinct()
const _decoratedTorusKnot5c = (['scale'] as const).distinct()

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
        _grannyKnot: typeof _grannyKnot
        _heartCurve: typeof _heartCurve
        _vivianiCurve: typeof _vivianiCurve
        _knotCurve: typeof _knotCurve
        _helixCurve: typeof _helixCurve
        _trefoilKnot: typeof _trefoilKnot
        _torusKnot: typeof _torusKnot
        _cinquefoilKnot: typeof _cinquefoilKnot
        _trefoilPolynomialKnot: typeof _trefoilPolynomialKnot
        _figureEightPolynomialKnot: typeof _figureEightPolynomialKnot
        _decoratedTorusKnot4a: typeof _decoratedTorusKnot4a
        _decoratedTorusKnot4b: typeof _decoratedTorusKnot4b
        _decoratedTorusKnot5a: typeof _decoratedTorusKnot5a
        _decoratedTorusKnot5c: typeof _decoratedTorusKnot5c
    }
}

consParams.grannyKnot = grannyKnot
consParams.heartCurve = heartCurve
consParams.vivianiCurve = vivianiCurve
consParams.knotCurve = knotCurve
consParams.helixCurve = helixCurve
consParams.trefoilKnot = trefoilKnot
consParams.torusKnot = torusKnot
consParams.cinquefoilKnot = cinquefoilKnot
consParams.trefoilPolynomialKnot = trefoilPolynomialKnot
consParams.figureEightPolynomialKnot = figureEightPolynomialKnot
consParams.decoratedTorusKnot4a = decoratedTorusKnot4a
consParams.decoratedTorusKnot4b = decoratedTorusKnot4b
consParams.decoratedTorusKnot5a = decoratedTorusKnot5a
consParams.decoratedTorusKnot5c = decoratedTorusKnot5c

objProps._grannyKnot = _grannyKnot
objProps._heartCurve = _heartCurve
objProps._vivianiCurve = _vivianiCurve
objProps._knotCurve = _knotCurve
objProps._helixCurve = _helixCurve
objProps._trefoilKnot = _trefoilKnot
objProps._torusKnot = _torusKnot
objProps._cinquefoilKnot = _cinquefoilKnot
objProps._trefoilPolynomialKnot = _trefoilPolynomialKnot
objProps._figureEightPolynomialKnot = _figureEightPolynomialKnot
objProps._decoratedTorusKnot4a = _decoratedTorusKnot4a
objProps._decoratedTorusKnot4b = _decoratedTorusKnot4b
objProps._decoratedTorusKnot5a = _decoratedTorusKnot5a
objProps._decoratedTorusKnot5c = _decoratedTorusKnot5c

// Default values
defaults.grannyKnot = {}
defaults.heartCurve = { scale: 5 }
defaults.vivianiCurve = { scale: 70 }
defaults.knotCurve = {}
defaults.helixCurve = {}
defaults.trefoilKnot = { scale: 10 }
defaults.torusKnot = { scale: 10 }
defaults.cinquefoilKnot = { scale: 10 }
defaults.trefoilPolynomialKnot = { scale: 10 }
defaults.figureEightPolynomialKnot = { scale: 1 }
defaults.decoratedTorusKnot4a = { scale: 40 }
defaults.decoratedTorusKnot4b = { scale: 40 }
defaults.decoratedTorusKnot5a = { scale: 40 }
defaults.decoratedTorusKnot5c = { scale: 40 }
