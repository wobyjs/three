import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
export * from 'three/examples/jsm/environments/RoomEnvironment.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RoomEnvironment: typeof RoomEnvironment
    }
}

Three.RoomEnvironment = RoomEnvironment

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            roomEnvironment: RoomEnvironmentProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        roomEnvironment: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        roomEnvironment: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\RoomEnvironment.d.ts

consParams.roomEnvironment = [
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\RoomEnvironment.d.ts    

objParams.roomEnvironment = [...objParams.scene,
].distinct()

export type RoomEnvironmentProps = Node<RoomEnvironment, typeof RoomEnvironment, { renderer?: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        roomEnvironment: { renderer?: WebGLRenderer; }
    }
}

defaults.roomEnvironment = {}

