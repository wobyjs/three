import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass.js'
export * from 'three/examples/jsm/postprocessing/SSAARenderPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        SSAARenderPass: typeof SSAARenderPass
    }
}

Three.SSAARenderPass = SSAARenderPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ssaaRenderPass: SSAARenderPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ssaaRenderPass: typeof ssaaRenderPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ssaaRenderPass: typeof _ssaaRenderPass
    }
}



const ssaaRenderPass = ([
    'scene',
    'camera',
    'clearColor',
    'clearAlpha',
] as const).distinct()
consParams.ssaaRenderPass = ssaaRenderPass



const _ssaaRenderPass = ([...objProps.pass,
    'scene',
    'camera',
    'sampleLevel',
    'unbiased',
    'clearColor',
    'clearAlpha',
    'copyUniforms',
    'copyMaterial',
    'fsQuad',
    'sampleRenderTarget',
] as const).distinct()
objProps.ssaaRenderPass = _ssaaRenderPass

export type SSAARenderPassProps = Node<SSAARenderPass, typeof SSAARenderPass, { scene: Scene; camera: Camera; clearColor?: ColorRepresentation; clearAlpha?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ssaaRenderPass: Partial<{ scene: Scene; camera: Camera; clearColor?: ColorRepresentation; clearAlpha?: number; }>
    }
}

defaults.ssaaRenderPass = {}

