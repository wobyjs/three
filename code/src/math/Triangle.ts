import { Node, Vector3 } from '../../three-types'
import { Triangle } from 'three/src/math/Triangle.js'
export { Triangle } from 'three/src/math/Triangle.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        triangle: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        triangle: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Triangle.d.ts

consParams.triangle = [
    'a',
    'b',
    'c',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Triangle.d.ts

objParams.triangle = [
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
].distinct()

export type TriangleProps = Node<Triangle, typeof Triangle, { a?: Vector3; b?: Vector3; c?: Vector3; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        triangle: { a?: Vector3; b?: Vector3; c?: Vector3; }
    }
}

defaults.triangle = {}

