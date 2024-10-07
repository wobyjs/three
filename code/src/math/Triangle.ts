import { Node, Vector3 } from '../../three-types'
import { Triangle } from 'three/src/math/Triangle.js'
export { Triangle } from 'three/src/math/Triangle.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Triangle: typeof Triangle
    }
}

Three.Triangle = Triangle

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            triangle: TriangleProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        triangle: typeof triangle
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        triangle: typeof _triangle
    }
}



const triangle = ([
    'a',
    'b',
    'c',
] as const).distinct()
consParams.triangle = triangle



const _triangle = ([
    /**
     * @default new THREE.Vector3()
     */
    'a',
    /**
     * @default new THREE.Vector3()
     */
    'b',
    /**
     * @default new THREE.Vector3()
     */
    'c',
] as const).distinct()
objProps.triangle = _triangle

export type TriangleProps = Node<Triangle, typeof Triangle, { a?: Vector3; b?: Vector3; c?: Vector3; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        triangle: { a?: Vector3; b?: Vector3; c?: Vector3; }
    }
}

defaults.triangle = {}

