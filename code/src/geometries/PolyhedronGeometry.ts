import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry.js'
export { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        PolyhedronGeometry: typeof PolyhedronGeometry
    }
}

Three.PolyhedronGeometry = PolyhedronGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            polyhedronGeometry: PolyhedronGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        polyhedronGeometry: typeof polyhedronGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        polyhedronGeometry: typeof _polyhedronGeometry
    }
}


/**
 * A polyhedron is a solid in three dimensions with flat faces
 * @remarks
 * This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail
 * This class is used by {@link THREE.DodecahedronGeometry
{@link THREE.IcosahedronGeometry
 * {@link THREE.OctahedronGeometry and {@link THREE.TetrahedronGeometry} to generate their respective geometries.
 * @example
 * ```typescript
 * const verticesOfCube = [-1,
-1,
-1, 1,
-1,
-1, 1, 1,
-1,
-1, 1,
-1,
-1,
-1, 1, 1,
-1, 1, 1, 1, 1,
-1, 1, 1,
].distinct()
 * const indicesOfFaces = [
 * 2, 1, 0, 0, 3, 2,
 * 0, 4, 7, 7, 3, 0,
 * 0, 1, 5, 5, 4, 0,
 * 1, 2, 6, 6, 5, 1,
 * 2, 3, 7, 7, 6, 2,
 * 4, 5, 6, 6, 7, 4].distinct()
 * const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PolyhedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PolyhedronGeometry.js}
 */

const polyhedronGeometry = ([
    /**
     * Create a new instance of {@link PolyhedronGeometry}
     * @param vertices Array of points of the form [1,1,1,-1,-1,-1,...this. ]. Default `[]`.
     * @param indices Array of indices that make up the faces of the form [0,1,2,2,3,0,...this. ]. Default `[]`.
     * @param radius [page:The radius of the final shape Expects a `Float`. Default `1`
     * @param detail [page:How many levels to subdivide the geometry. The more detail, the smoother the shape. Expects a `Integer`. Default `0`
     */
    'vertices',
    'indices',
    'radius',
    'detail',
] as const).distinct()
consParams.polyhedronGeometry = polyhedronGeometry


/**
 * A polyhedron is a solid in three dimensions with flat faces
 * @remarks
 * This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail
 * This class is used by {@link THREE.DodecahedronGeometry | DodecahedronGeometry {@link THREE.IcosahedronGeometry | IcosahedronGeometry
 * {@link THREE.OctahedronGeometry | OctahedronGeometry and {@link THREE.TetrahedronGeometry | TetrahedronGeometry} to generate their respective geometries.
 * @example
 * ```typescript
 * const verticesOfCube = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, ].distinct()
 * const indicesOfFaces = [
 * 2, 1, 0, 0, 3, 2,
 * 0, 4, 7, 7, 3, 0,
 * 0, 1, 5, 5, 4, 0,
 * 1, 2, 6, 6, 5, 1,
 * 2, 3, 7, 7, 6, 2,
 * 4, 5, 6, 6, 7, 4].distinct()
 * const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PolyhedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PolyhedronGeometry.js | Source}
 */

const _polyhedronGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.polyhedronGeometry = _polyhedronGeometry

export type PolyhedronGeometryProps = BufferGeometryNode<PolyhedronGeometry, typeof PolyhedronGeometry, { vertices?: number[]; indices?: number[]; radius?: number; detail?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        polyhedronGeometry: { vertices?: number[]; indices?: number[]; radius?: number; detail?: number; }
    }
}

defaults.polyhedronGeometry = {}
