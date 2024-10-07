import { Node, Vector3 } from '../../../three-types'
import { Capsule } from 'three/examples/jsm/math/Capsule.js'
export * from 'three/examples/jsm/math/Capsule.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Capsule: typeof Capsule
    }
}

Three.Capsule = Capsule

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            capsule: CapsuleProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        capsule: typeof capsule
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        capsule: typeof _capsule
    }
}



const capsule = ([
    'start',
    'end',
    'radius',
] as const).distinct()
consParams.capsule = capsule



const _capsule = ([
    'start',
    'end',
    'radius',
] as const).distinct()
objProps.capsule = _capsule

export type CapsuleProps = Node<Capsule, typeof Capsule, { start?: Vector3; end?: Vector3; radius?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        capsule: Partial<{ start?: Vector3; end?: Vector3; radius?: number; }>
    }
}

defaults.capsule = {}

