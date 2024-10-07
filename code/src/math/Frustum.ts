import { Node } from '../../three-types'
import { Plane } from 'three/src/math/Plane.js'
import { Frustum } from 'three/src/math/Frustum.js'
export { Frustum } from 'three/src/math/Frustum.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Frustum: typeof Frustum
    }
}

Three.Frustum = Frustum

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            frustum: FrustumProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        frustum: typeof frustum
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        frustum: typeof _frustum
    }
}


/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */

const frustum = ([
    'p0',
    'p1',
    'p2',
    'p3',
    'p4',
    'p5',
] as const).distinct()
consParams.frustum = frustum


/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */

const _frustum = ([
    /**
     * Array of 6 vectors.
     */
    'planes',
] as const).distinct()
objProps.frustum = _frustum

export type FrustumProps = Node<Frustum, typeof Frustum, { p0?: Plane; p1?: Plane; p2?: Plane; p3?: Plane; p4?: Plane; p5?: Plane; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        frustum: { p0?: Plane; p1?: Plane; p2?: Plane; p3?: Plane; p4?: Plane; p5?: Plane; }
    }
}

defaults.frustum = {}

