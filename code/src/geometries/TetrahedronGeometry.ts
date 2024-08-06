import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { TetrahedronGeometry } from 'three/src/geometries/TetrahedronGeometry.js'
export { TetrahedronGeometry } from 'three/src/geometries/TetrahedronGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        TetrahedronGeometry: typeof TetrahedronGeometry
    }
}

Three.TetrahedronGeometry = TetrahedronGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tetrahedronGeometry: TetrahedronGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        tetrahedronGeometry: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        tetrahedronGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TetrahedronGeometry.d.ts
/**
 * A class for generating a tetrahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js}
 */
consParams.tetrahedronGeometry = [
    /**
     * Create a new instance of {@link TetrahedronGeometry}
     * @param radius Radius of the tetrahedron. Expects a `Float`. Default `1`
     * @param detail Setting this.to a value greater than 0 adds vertices making it no longer a tetrahedron. Expects a `Integer`. Default `0`
     */
    'radius',
    'detail',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TetrahedronGeometry.d.ts
/**
 * A class for generating a tetrahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js | Source}
 */
objParams.tetrahedronGeometry = [...objParams.polyhedronGeometry,
].distinct()

export type TetrahedronGeometryProps = BufferGeometryNode<TetrahedronGeometry, typeof TetrahedronGeometry, { radius?: number; detail?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        tetrahedronGeometry: { radius?: number; detail?: number; }
    }
}

defaults.tetrahedronGeometry = { radius: 1, detail: 0 }
