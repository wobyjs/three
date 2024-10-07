import { Node, Vector2 } from '../../../three-types'
import { Path } from 'three/src/extras/core/Path.js'
export { Path } from 'three/src/extras/core/Path.js'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './CurvePath'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            //@ts-ignore
            path: PathProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        path: typeof path
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        path: typeof _path
    }
}



/**
 * A 2D {@link Path} representation.
 * @remarks
 * The class provides methods for creating paths and contours of 2D shapes similar to the 2D Canvas API.
 * @example
 * ```typescript
 * const {@link Path} = new THREE.Path(,
 * path.lineTo(0, 0.8,
 * path.quadraticCurveTo(0, 1, 0.2, 1,
 * path.lineTo(1, 1,
 * const points = path.getPoints(,
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const material = new THREE.LineBasicMaterial({
 * color
 * 
 * const line = new THREE.Line(geometry, material,
 * scene.add(line,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Path Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Path.js}
 */

const path = ([
    /**
     * Creates a {@link Path} from the points
     * @remarks
     * The first point defines the offset, then successive points are added to the {@link CurvePath.curves} array as {@link LineCurve}.
     * If no points are specified, an empty {@link Path} is created and the {@link .currentPoint} is set to the origin.
     * @param points Array of {@link Vector2}.
     */
    'points',
] as const).distinct()
consParams.path = path



/**
 * A 2d {@link Path} representation.
 * @remarks
 * The class provides methods for creating paths and contours of 2d shapes similar to the 2d Canvas API.
 * @example
 * ```typescript
 * const {@link Path} = new THREE.Path()
 * path.lineTo(0, 0.8)
 * path.quadraticCurveTo(0, 1, 0.2, 1)
 * path.lineTo(1, 1)
 * const points = path.getPoints()
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xffffff
 * })
 * const line = new THREE.Line(geometry, material)
 * scene.add(line)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Path | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Path.js | Source}
 */

const _path = ([...objProps.curvePath,
    /**
     * The current offset of the path. Any new {@link THREE.Curve | Curve} added will start here.
     * @defaultValue `new THREE.Vector2()`
     */
    'currentPoint',
] as const).distinct()
objProps.path = _path

export type PathProps = Node<Path, typeof Path, { points?: Vector2[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        path: { points?: Vector2[]; }
    }
}

defaults.path = {}

