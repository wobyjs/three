import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { OctahedronGeometry } from 'three/src/geometries/OctahedronGeometry.js'
export { OctahedronGeometry } from 'three/src/geometries/OctahedronGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        OctahedronGeometry: typeof OctahedronGeometry
    }
}

Three.OctahedronGeometry = OctahedronGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            octahedronGeometry: OctahedronGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        octahedronGeometry: typeof octahedronGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        octahedronGeometry: typeof _octahedronGeometry
    }
}


/**
 * A class for generating an octahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js}
 */

const octahedronGeometry = ([
    /**
     * Create a new instance of {@link OctahedronGeometry}
     * @param radius Radius of the octahedron. Expects a `Float`. Default `1`
     * @param detail Setting this.to a value greater than zero add vertices making it no longer an octahedron. Expects a `Integer`. Default `0`
     */
    'radius',
    'detail',
] as const).distinct()
consParams.octahedronGeometry = octahedronGeometry


/**
 * A class for generating an octahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js | Source}
 */

const _octahedronGeometry = ([...objProps.polyhedronGeometry,
] as const).distinct()
objProps.octahedronGeometry = _octahedronGeometry


export type OctahedronGeometryProps = BufferGeometryNode<OctahedronGeometry, typeof OctahedronGeometry, { radius?: number; detail?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        octahedronGeometry: { radius?: number; detail?: number; }
    }
}

defaults.octahedronGeometry = { radius: 1, detail: 0, }
