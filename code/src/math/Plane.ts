import { Node } from '../../three-types'
import { Plane } from 'three/src/math/Plane.js'
export { Plane } from 'three/src/math/Plane.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { Vector3 } from 'three/src/math/Vector3'

declare module '../../lib/3/three'
{
    interface Three {
        Plane: typeof Plane
    }
}

Three.Plane = Plane

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            plane: PlaneProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        plane: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        plane: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Plane.d.ts

consParams.plane = [
    'normal',
    'constant',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Plane.d.ts

objParams.plane = [
    /**
     * @default new THREE.Vector3( 1, 0, 0 )
     */
    'normal',
    /**
     * @default 0
     */
    'constant',
].distinct()

export type PlaneProps = Node<Plane, typeof Plane, { normal?: Vector3; constant?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        plane: { normal?: Vector3; constant?: number; }
    }
}

defaults.plane = { normal: new Vector3(1, 0, 0), constant: 0 }
