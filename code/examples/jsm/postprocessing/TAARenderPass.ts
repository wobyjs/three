import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js'
export * from 'three/examples/jsm/postprocessing/TAARenderPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './SSAARenderPass'

declare module '../../../lib/3/three'
{
    interface Three {
        TAARenderPass: typeof TAARenderPass
    }
}

Three.TAARenderPass = TAARenderPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            taaRenderPass: TAARenderPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        taaRenderPass: typeof taaRenderPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        taaRenderPass: typeof _taaRenderPass
    }
}



const taaRenderPass = ([
    'scene',
    'camera',
    'clearColor',
    'clearAlpha',
] as const).distinct()
consParams.taaRenderPass = taaRenderPass



const _taaRenderPass = ([...objProps.ssaaRenderPass,
    'accumulate',
] as const).distinct()
objProps.taaRenderPass = _taaRenderPass

export type TAARenderPassProps = Node<TAARenderPass, typeof TAARenderPass, { scene: Scene; camera: Camera; clearColor?: ColorRepresentation; clearAlpha?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        taaRenderPass: Partial<{ scene: Scene; camera: Camera; clearColor?: ColorRepresentation; clearAlpha?: number; }>
    }
}

defaults.taaRenderPass = {}

