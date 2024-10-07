import { Node } from '../../../three-types'
import { Texture } from 'three/src/textures/Texture.js'
import { GroundedSkybox } from 'three/examples/jsm/objects/GroundedSkybox.js'
export * from 'three/examples/jsm/objects/GroundedSkybox.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        GroundedSkybox: typeof GroundedSkybox
    }
}

Three.GroundedSkybox = GroundedSkybox

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            groundedSkybox: GroundedSkyboxProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        groundedSkybox: typeof groundedSkybox
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        groundedSkybox: typeof _groundedSkybox
    }
}



const groundedSkybox = ([
    'map',
    'height',
    'radius',
    'resolution',
] as const).distinct()
consParams.groundedSkybox = groundedSkybox



const _groundedSkybox = ([...objProps.mesh,
] as const).distinct()
objProps.groundedSkybox = _groundedSkybox

export type GroundedSkyboxProps = Node<GroundedSkybox, typeof GroundedSkybox, { map: Texture; height: number; radius: number; resolution?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        groundedSkybox: Partial<{ map: Texture; height: number; radius: number; resolution?: number; }>
    }
}

defaults.groundedSkybox = {}

