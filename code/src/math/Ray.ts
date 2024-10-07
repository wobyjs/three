import { Node, Vector3 } from '../../three-types'
import { Ray } from 'three/src/math/Ray.js'
export { Ray } from 'three/src/math/Ray.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Ray: typeof Ray
    }
}

Three.Ray = Ray

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ray: RayProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        ray: typeof ray
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        ray: typeof _ray
    }
}



const ray = ([
    'origin',
    'direction',
] as const).distinct()
consParams.ray = ray



const _ray = ([
    /**
     * @default new THREE.Vector3()
     */
    'origin',
    /**
     * @default new THREE.Vector3( 0, 0, - 1 )
     */
    'direction',
] as const).distinct()
objProps.ray = _ray

export type RayProps = Node<Ray, typeof Ray, { origin?: Vector3; direction?: Vector3; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        ray: { origin?: Vector3; direction?: Vector3; }
    }
}

defaults.ray = {}

