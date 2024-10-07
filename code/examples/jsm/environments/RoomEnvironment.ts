import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
export * from 'three/examples/jsm/environments/RoomEnvironment.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        roomEnvironment: typeof roomEnvironment
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        roomEnvironment: typeof _roomEnvironment
    }
}



const roomEnvironment = ([
    'renderer',
] as const).distinct()
consParams.roomEnvironment = roomEnvironment



const _roomEnvironment = ([...objProps.scene,
] as const).distinct()
objProps.roomEnvironment = _roomEnvironment

export type RoomEnvironmentProps = Node<RoomEnvironment, typeof RoomEnvironment, { renderer?: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        roomEnvironment: { renderer?: WebGLRenderer; }
    }
}

defaults.roomEnvironment = {}

