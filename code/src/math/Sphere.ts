import { Node, Vector3 } from '../../three-types'
import { Sphere } from 'three/src/math/Sphere.js'
export { Sphere } from 'three/src/math/Sphere.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Sphere: typeof Sphere
    }
}

Three.Sphere = Sphere

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sphere: SphereProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        sphere: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        sphere: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Sphere.d.ts

consParams.sphere = [
    'center',
    'radius',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Sphere.d.ts

objParams.sphere = [
    /**
     * @default new Vector3()
     */
    'center',
    /**
     * @default 1
     */
    'radius',
].distinct()

export type SphereProps = Node<Sphere, typeof Sphere, { center?: Vector3; radius?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        sphere: { center?: Vector3; radius?: number; }
    }
}

defaults.sphere = {}

