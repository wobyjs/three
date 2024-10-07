import { Node, Color } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Material } from 'three/src/materials/Material.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
export * from 'three/examples/jsm/postprocessing/RenderPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        RenderPass: typeof RenderPass
    }
}

Three.RenderPass = RenderPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderPass: RenderPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        renderPass: typeof renderPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        renderPass: typeof _renderPass
    }
}



const renderPass = ([
    'scene',
    'camera',
    'overrideMaterial',
    'clearColor',
    'clearAlpha',
] as const).distinct()
consParams.renderPass = renderPass



const _renderPass = ([...objProps.pass,
    'scene',
    'camera',
    'overrideMaterial',
    'clearColor',
    'clearAlpha',
    'clearDepth',
] as const).distinct()
objProps.renderPass = _renderPass

export type RenderPassProps = Node<RenderPass, typeof RenderPass, { scene: Scene; camera: Camera; overrideMaterial?: Material | null; clearColor?: Color | null; clearAlpha?: number | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        renderPass: Partial<{ scene: Scene; camera: Camera; overrideMaterial?: Material | null; clearColor?: Color | null; clearAlpha?: number | null; }>
    }
}

defaults.renderPass = {}

