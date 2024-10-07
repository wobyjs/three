import { RenderPixelatedPassParameters, RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js'
export * from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js'
import { Node, WrapAsString } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        RenderPixelatedPass: typeof RenderPixelatedPass
    }
}

Three.RenderPixelatedPass = RenderPixelatedPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderPixelatedPass: RenderPixelatedPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        renderPixelatedPass: typeof renderPixelatedPass
        renderPixelatedPassParameters: WrapAsString<RenderPixelatedPassParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        renderPixelatedPass: typeof _renderPixelatedPass
        renderPixelatedPassParameters: typeof _renderPixelatedPassParameters
    }
}



consParams.renderPixelatedPassParameters = ([
    'normalEdgeStrength',
    'depthEdgeStrength',
] as const).toObject()


const renderPixelatedPass = ([
    'pixelSize',
    'scene',
    'camera',
    'options',
] as const).distinct()
consParams.renderPixelatedPass = renderPixelatedPass



const _renderPixelatedPassParameters = ([
    'normalEdgeStrength',
    'depthEdgeStrength',
] as const).distinct()
objProps.renderPixelatedPassParameters = _renderPixelatedPassParameters


const _renderPixelatedPass = ([...objProps.pass,
    'pixelSize',
    'resolution',
    'renderResolution',
    'pixelatedMaterial',
    'normalMaterial',
    'fsQuad',
    'scene',
    'camera',
    'normalEdgeStrength',
    'depthEdgeStrength',
    'beautyRenderTarget',
    'normalRenderTarget',
] as const).distinct()
objProps.renderPixelatedPass = _renderPixelatedPass

export type RenderPixelatedPassProps = Node<RenderPixelatedPass, typeof RenderPixelatedPass, { pixelSize: number; scene: Scene; camera: Camera; options?: RenderPixelatedPassParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        renderPixelatedPass: Partial<{ pixelSize: number; scene: Scene; camera: Camera; options?: RenderPixelatedPassParameters; }>
    }
}

defaults.renderPixelatedPass = {}

