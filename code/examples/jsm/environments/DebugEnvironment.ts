import { Node } from '../../../three-types'
import { DebugEnvironment } from 'three/examples/jsm/environments/DebugEnvironment.js'
export * from 'three/examples/jsm/environments/DebugEnvironment.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        debugEnvironment: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        debugEnvironment: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\DebugEnvironment.d.ts

consParams.debugEnvironment = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\DebugEnvironment.d.ts    

objParams.debugEnvironment = [...objParams.scene,
].distinct()

export type DebugEnvironmentProps = Node<DebugEnvironment, typeof DebugEnvironment, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        debugEnvironment: {}
    }
}

defaults.debugEnvironment = {}

