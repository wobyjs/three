import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { IcosahedronGeometry } from 'three/src/geometries/IcosahedronGeometry.js'
export { IcosahedronGeometry } from 'three/src/geometries/IcosahedronGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

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
        icosahedronGeometry: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        icosahedronGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\Geometries.d.ts

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\IcosahedronGeometry.d.ts
/**
 * A class for generating an icosahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js}
 */

consParams.icosahedronGeometry = [
    /**
     * Create a new instance of {@link IcosahedronGeometry}
     * @param radius Expects a `Float`. Default `1`
     * @param detail Setting this.to a value greater than 0 adds more vertices making it no longer an icosahedron.
     *           when detail is greater than 1, it's effectively a sphere. Expects a `Integer`. Default `0`
     */
    'radius',
    'detail',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\Geometries.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\IcosahedronGeometry.d.ts
/**
 * A class for generating an icosahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js | Source}
 */

objParams.icosahedronGeometry = [...objParams.polyhedronGeometry,
].distinct()


export type IcosahedronGeometryProps = BufferGeometryNode<IcosahedronGeometry, typeof IcosahedronGeometry, { radius?: number; detail?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        icosahedronGeometry: { radius?: number; detail?: number; }
    }
}

defaults.icosahedronGeometry = { radius: 1, detail: 0, }
