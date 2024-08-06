import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { DodecahedronGeometry } from 'three/src/geometries/DodecahedronGeometry.js'
export { DodecahedronGeometry } from 'three/src/geometries/DodecahedronGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './PolyhedronGeometry'

declare module '../../lib/3/three'
{
    interface Three {
        DodecahedronGeometry: typeof DodecahedronGeometry
    }
}

Three.DodecahedronGeometry = DodecahedronGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dodecahedronGeometry: DodecahedronGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        dodecahedronGeometry: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        dodecahedronGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\DodecahedronGeometry.d.ts
/**
 * A class for generating a dodecahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js}
 */

consParams.dodecahedronGeometry = [
    /**
     * Create a new instance of {@link DodecahedronGeometry}
     * @param radius Radius of the dodecahedron. Expects a `Float`. Default `1`
     * @param detail Setting this.to a value greater than 0 adds vertices making it no longer a dodecahedron. Expects a `Integer`. Default `0`
     */
    'radius',
    'detail',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\DodecahedronGeometry.d.ts
/**
 * A class for generating a dodecahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js | Source}
 */

objParams.dodecahedronGeometry = [...objParams.polyhedronGeometry,
].distinct()

export type DodecahedronGeometryProps = BufferGeometryNode<DodecahedronGeometry, typeof DodecahedronGeometry, { radius?: number; detail?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        dodecahedronGeometry: { radius?: number; detail?: number; }
    }
}

defaults.dodecahedronGeometry = { radius: 1, detail: 0, }
