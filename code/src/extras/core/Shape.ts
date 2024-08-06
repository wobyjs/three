import { Object3DNode, Vector2 } from '../../../three-types'
import { Shape } from 'three/src/extras/core/Shape.js'
export { Shape } from 'three/src/extras/core/Shape.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Path'

declare module '../../../lib/3/three'
{
    interface Three {
        Shape: typeof Shape
    }
}

Three.Shape = Shape

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shape: ShapeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shape: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        shape: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Shape.d.ts
/**
 * Defines an arbitrary 2d {@link Shape} plane using paths with optional holes
 * @remarks
 * It can be used with {@link THREE.ExtrudeGeometry {@link THREE.ShapeGeometry to get points, or to get triangulated faces.
 * @example
 * ```typescript
 * const heartShape = new THREE.Shape(,
 * heartShape.moveTo(25, 25,
 * heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0,
 * heartShape.bezierCurveTo(-30, 0,
-30, 35,
-30, 35,
 * heartShape.bezierCurveTo(-30, 55,
-10, 77, 25, 95,
 * heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35,
 * heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0,
 * heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25,
 * const extrudeSettings = {
 * depth,
 * bevelEnabled,
 * bevelSegments,
 * steps,
 * bevelSize,
 * bevelThickness
 * 
 * const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings,
 * const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial(),
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_shapes / shapes }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes / extrude / shapes }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes2 / extrude / shapes2 }
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Shape Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Shape.js}
 */

consParams.shape = [
    /**
     * Creates a {@link Shape} from the points
     * @remarks
     * The first point defines the offset, then successive points are added to the {@link CurvePath.curves} array as {@link THREE.LineCurve}.
     * If no points are specified, an empty {@link Shape} is created and the {@link .currentPoint} is set to the origin.
     * @param points Array of {@link Vector2}.
     */
    'points',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Shape.d.ts
/**
 * Defines an arbitrary 2d {@link Shape} plane using paths with optional holes
 * @remarks
 * It can be used with {@link THREE.ExtrudeGeometry | ExtrudeGeometry {@link THREE.ShapeGeometry | ShapeGeometry to get points, or to get triangulated faces.
 * @example
 * ```typescript
 * const heartShape = new THREE.Shape()
 * heartShape.moveTo(25, 25)
 * heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0)
 * heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35)
 * heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95)
 * heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35)
 * heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0)
 * heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25)
 * const extrudeSettings = {
 *     depth: 8,
 *     bevelEnabled: true,
 *     bevelSegments: 2,
 *     steps: 2,
 *     bevelSize: 1,
 *     bevelThickness: 1
 * }
 * const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings)
 * const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial())
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_shapes | geometry / shapes }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes | geometry / extrude / shapes }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes2 | geometry / extrude / shapes2 }
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Shape | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Shape.js | Source}
 */

objParams.shape = [...objParams.path,
    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    'uuid',
    /**
     * An array of {@link Path | paths} that define the holes in the shape.
     * @defaultValue `[].distinct()`
     */
    'holes',
].distinct()

export type ShapeProps = Object3DNode<Shape, typeof Shape, { points?: Vector2[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shape: { points?: Vector2[]; }
    }
}

defaults.shape = {}

