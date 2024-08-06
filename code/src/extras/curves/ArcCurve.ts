import { Object3DNode } from '../../../three-types'
import { ArcCurve } from 'three/src/extras/curves/ArcCurve.js'
export { ArcCurve } from 'three/src/extras/curves/ArcCurve.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './EllipseCurve'

declare module '../../../lib/3/three'
{
    interface Three {
        ArcCurve: typeof ArcCurve
    }
}

Three.ArcCurve = ArcCurve

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arcCurve: ArcCurveProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        arcCurve: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        arcCurve: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\ArcCurve.d.ts
/**
 * Alias for {@link THREE.EllipseCurve}.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/ArcCurve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/ArcCurve.js}
 */

consParams.arcCurve = [
    /**
     * This constructor creates a new {@link ArcCurve}.
     * @param aX The X center of the ellipse. Expects a `Float`. Default is `0`.
     * @param aY The Y center of the ellipse. Expects a `Float`. Default is `0`.
     * @param xradius The radius of the ellipse in the x direction. Expects a `Float`. Default is `1`.
     * @param yRadius The radius of the ellipse in the y direction. Expects a `Float`. Default is `1`.
     * @param aStartAngle The start angle of the curve in radians starting from the positive X axis. Default is `0`.
     * @param aEndAngle The end angle of the curve in radians starting from the positive X axis. Default is `2 x Math.PI`.
     * @param aClockwise Whether the ellipse is drawn clockwise. Default is `false`.
     */

    'aX',
    'aY',
    'aRadius',
    'aStartAngle',
    'aEndAngle',
    'aClockwise',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\ArcCurve.d.ts
/**
 * Alias for {@link THREE.EllipseCurve | EllipseCurve}.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/ArcCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/ArcCurve.js | Source}
 */

objParams.arcCurve = [...objParams.ellipseCurve,
].distinct()

export type ArcCurveProps = Object3DNode<ArcCurve, typeof ArcCurve, { aX?: number; aY?: number; aRadius?: number; aStartAngle?: number; aEndAngle?: number; aClockwise?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        arcCurve: Partial<{ aX?: number; aY?: number; aRadius?: number; aStartAngle?: number; aEndAngle?: number; aClockwise?: boolean; }>
    }
}

defaults.arcCurve = {}

