import { Node, Vector3 } from '../../three-types'
import { Sphere } from 'three/src/math/Sphere.js'
export { Sphere } from 'three/src/math/Sphere.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        sphere: typeof sphere
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        sphere: typeof _sphere
    }
}



const sphere = ([
    'center',
    'radius',
] as const).distinct()
consParams.sphere = sphere



const _sphere = ([
    /**
     * @default new Vector3()
     */
    'center',
    /**
     * @default 1
     */
    'radius',
] as const).distinct()
objProps.sphere = _sphere

export type SphereProps = Node<Sphere, typeof Sphere, { center?: Vector3; radius?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        sphere: { center?: Vector3; radius?: number; }
    }
}

defaults.sphere = {}

