import { Node } from '../../../three-types'
import { DebugEnvironment } from 'three/examples/jsm/environments/DebugEnvironment.js'
export * from 'three/examples/jsm/environments/DebugEnvironment.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        DebugEnvironment: typeof DebugEnvironment
    }
}

Three.DebugEnvironment = DebugEnvironment

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            debugEnvironment: DebugEnvironmentProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        debugEnvironment: typeof debugEnvironment
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        debugEnvironment: typeof _debugEnvironment
    }
}



const debugEnvironment = ([
] as const).distinct()
consParams.debugEnvironment = debugEnvironment



const _debugEnvironment = ([...objProps.scene,
] as const).distinct()
objProps.debugEnvironment = _debugEnvironment

export type DebugEnvironmentProps = Node<DebugEnvironment, typeof DebugEnvironment, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        debugEnvironment: {}
    }
}

defaults.debugEnvironment = {}

