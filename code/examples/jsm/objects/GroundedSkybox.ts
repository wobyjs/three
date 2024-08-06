import { Node } from '../../../three-types'
import { Texture } from 'three/src/textures/Texture.js'
import { GroundedSkybox } from 'three/examples/jsm/objects/GroundedSkybox.js'
export * from 'three/examples/jsm/objects/GroundedSkybox.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        groundedSkybox: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        groundedSkybox: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\GroundedSkybox.d.ts

consParams.groundedSkybox = [
    'map',
    'height',
    'radius',
    'resolution',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\GroundedSkybox.d.ts    

objParams.groundedSkybox = [...objParams.mesh,
].distinct()

export type GroundedSkyboxProps = Node<GroundedSkybox, typeof GroundedSkybox, { map: Texture; height: number; radius: number; resolution?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        groundedSkybox: Partial<{ map: Texture; height: number; radius: number; resolution?: number; }>
    }
}

defaults.groundedSkybox = {}

