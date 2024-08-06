import { Node, Vector3 } from '../../../three-types'
import { Matrix3 } from 'three/src/math/Matrix3.js'
import { OBB } from 'three/examples/jsm/math/OBB.js'
export * from 'three/examples/jsm/math/OBB.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OBB: typeof OBB
    }
}

Three.OBB = OBB

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            obb: OBBProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        obb: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        obb: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\OBB.d.ts

consParams.obb = [
    'center',
    'halfSize',
    'rotation',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\OBB.d.ts

objParams.obb = [
    'center',
    'halfSize',
    'rotation',
].distinct()

export type OBBProps = Node<OBB, typeof OBB, { center?: Vector3; halfSize?: Vector3; rotation?: Matrix3; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        oBB: Partial<{ center?: Vector3; halfSize?: Vector3; rotation?: Matrix3; }>
    }
}

defaults.oBB = {}

