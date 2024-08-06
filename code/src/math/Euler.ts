import { Node } from '../../three-types'
import { Euler, EulerOrder } from 'three/src/math/Euler.js'
// export { Euler, EulerOrder } from 'three/src/math/Euler.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Euler: typeof Euler
    }
}

Three.Euler = Euler

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            euler: EulerProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        euler: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        euler: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Euler.d.ts

consParams.euler = [
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    /**
     * @default 0
     */
    'z',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Euler.d.ts

objParams.euler = [
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    /**
     * @default 0
     */
    'z',
    /**
     * @default THREE.Euler.DEFAULT_ORDER
     */
    'order',
].distinct()


export type EulerProps = Node<Euler, typeof Euler, { x?: number; y?: number; z?: number; order?: EulerOrder; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        euler: { x?: number; y?: number; z?: number; order?: EulerOrder; }
    }
}

defaults.euler = { x: 0, y: 0, z: 0, order: 'XYZ' }


