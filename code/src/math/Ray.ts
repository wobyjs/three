import { Node, Vector3 } from '../../three-types'
import { Ray } from 'three/src/math/Ray.js'
export { Ray } from 'three/src/math/Ray.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        ray: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        ray: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Ray.d.ts

consParams.ray = [
    'origin',
    'direction',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Ray.d.ts

objParams.ray = [
    /**
     * @default new THREE.Vector3()
     */
    'origin',
    /**
     * @default new THREE.Vector3( 0, 0, - 1 )
     */
    'direction',
].distinct()

export type RayProps = Node<Ray, typeof Ray, { origin?: Vector3; direction?: Vector3; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        ray: { origin?: Vector3; direction?: Vector3; }
    }
}

defaults.ray = {}

