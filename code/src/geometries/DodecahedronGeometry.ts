import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { DodecahedronGeometry } from 'three/src/geometries/DodecahedronGeometry.js'
export { DodecahedronGeometry } from 'three/src/geometries/DodecahedronGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        dodecahedronGeometry: typeof dodecahedronGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        dodecahedronGeometry: typeof _dodecahedronGeometry
    }
}


/**
 * A class for generating a dodecahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js}
 */

const dodecahedronGeometry = ([
    /**
     * Create a new instance of {@link DodecahedronGeometry}
     * @param radius Radius of the dodecahedron. Expects a `Float`. Default `1`
     * @param detail Setting this.to a value greater than 0 adds vertices making it no longer a dodecahedron. Expects a `Integer`. Default `0`
     */
    'radius',
    'detail',
] as const).distinct()
consParams.dodecahedronGeometry = dodecahedronGeometry


/**
 * A class for generating a dodecahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js | Source}
 */

const _dodecahedronGeometry = ([...objProps.polyhedronGeometry,
] as const).distinct()
objProps.dodecahedronGeometry = _dodecahedronGeometry

export type DodecahedronGeometryProps = BufferGeometryNode<DodecahedronGeometry, typeof DodecahedronGeometry, { radius?: number; detail?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        dodecahedronGeometry: { radius?: number; detail?: number; }
    }
}

defaults.dodecahedronGeometry = { radius: 1, detail: 0, }
