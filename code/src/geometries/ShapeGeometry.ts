import { Shape } from 'three/src/extras/core/Shape.js'
import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { ShapeGeometry } from 'three/src/geometries/ShapeGeometry.js'
export { ShapeGeometry } from 'three/src/geometries/ShapeGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        ShapeGeometry: typeof ShapeGeometry
    }
}

Three.ShapeGeometry = ShapeGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shapeGeometry: ShapeGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        shapeGeometry: typeof shapeGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        shapeGeometry: typeof _shapeGeometry
    }
}


/**
 * Creates an one-sided polygonal geometry from one or more path shapes.
 * @example
 * ```typescript
 * const x = 0, y = 0,
 * const heartShape = new THREE.Shape(,
 * heartShape.moveTo(x + 5, y + 5,
 * heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y,
 * heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7,
 * heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19,
 * heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7,
 * heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y,
 * heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5,
 * const geometry = new THREE.ShapeGeometry(heartShape,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const mesh = new THREE.Mesh(geometry, material,
 * scene.add(mesh,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ShapeGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ShapeGeometry.js}
 */

const shapeGeometry = ([
    /**
     * Create a new instance of {@link ShapeGeometry}
     * @param shapes Array of shapes or a single {@link THREE.Shape}. Default `new Shape([new Vector2(0, 0.5), new Vector2(-0.5,
-0.5), new Vector2(0.5,
-0.5)])`, _a single triangle shape_.
     * @param curveSegments Number of segments per shape. Expects a `Integer`. Default `12`
     */
    'shapes',
    'curveSegments',
] as const).distinct()
consParams.shapeGeometry = shapeGeometry


/**
 * Creates an one-sided polygonal geometry from one or more path shapes.
 * @example
 * ```typescript
 * const x = 0, y = 0
 * const heartShape = new THREE.Shape()
 * heartShape.moveTo(x + 5, y + 5)
 * heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
 * heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
 * heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
 * heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
 * heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
 * heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)
 * const geometry = new THREE.ShapeGeometry(heartShape)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * })
 * const mesh = new THREE.Mesh(geometry, material)
 * scene.add(mesh)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ShapeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ShapeGeometry.js | Source}
 */

const _shapeGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.shapeGeometry = _shapeGeometry


export type ShapeGeometryProps = BufferGeometryNode<ShapeGeometry, typeof ShapeGeometry, { shapes?: Shape | Shape[]; curveSegments?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        shapeGeometry: { shapes?: Shape | Shape[]; curveSegments?: number; }
    }
}

defaults.shapeGeometry = { curveSegments: 12 }
