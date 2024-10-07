import { Node, Vector3 } from '../../../three-types'
import { Matrix3 } from 'three/src/math/Matrix3.js'
import { OBB } from 'three/examples/jsm/math/OBB.js'
export * from 'three/examples/jsm/math/OBB.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        obb: typeof obb
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        obb: typeof _obb
    }
}



const obb = ([
    'center',
    'halfSize',
    'rotation',
] as const).distinct()
consParams.obb = obb



const _obb = ([
    'center',
    'halfSize',
    'rotation',
] as const).distinct()
objProps.obb = _obb

export type OBBProps = Node<OBB, typeof OBB, { center?: Vector3; halfSize?: Vector3; rotation?: Matrix3; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        oBB: Partial<{ center?: Vector3; halfSize?: Vector3; rotation?: Matrix3; }>
    }
}

defaults.oBB = {}

