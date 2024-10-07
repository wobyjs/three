import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { IcosahedronGeometry } from 'three/src/geometries/IcosahedronGeometry.js'
export { IcosahedronGeometry } from 'three/src/geometries/IcosahedronGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'
import './PolyhedronGeometry'

declare module '../../lib/3/three'
{
    interface Three {
        IcosahedronGeometry: typeof IcosahedronGeometry
    }
}

Three.IcosahedronGeometry = IcosahedronGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            icosahedronGeometry: IcosahedronGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        icosahedronGeometry: typeof icosahedronGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        icosahedronGeometry: typeof _icosahedronGeometry
    }
}




/**
 * A class for generating an icosahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js}
 */

const icosahedronGeometry = ([
    /**
     * Create a new instance of {@link IcosahedronGeometry}
     * @param radius Expects a `Float`. Default `1`
     * @param detail Setting this.to a value greater than 0 adds more vertices making it no longer an icosahedron.
     *           when detail is greater than 1, it's effectively a sphere. Expects a `Integer`. Default `0`
     */
    'radius',
    'detail',
] as const).distinct()
consParams.icosahedronGeometry = icosahedronGeometry



/**
 * A class for generating an icosahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js | Source}
 */

const _icosahedronGeometry = ([...objProps.polyhedronGeometry,
] as const).distinct()
objProps.icosahedronGeometry = _icosahedronGeometry


export type IcosahedronGeometryProps = BufferGeometryNode<IcosahedronGeometry, typeof IcosahedronGeometry, { radius?: number; detail?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        icosahedronGeometry: { radius?: number; detail?: number; }
    }
}

defaults.icosahedronGeometry = { radius: 1, detail: 0, }
