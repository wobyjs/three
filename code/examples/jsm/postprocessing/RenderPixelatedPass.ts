import { RenderPixelatedPassParameters, RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js'
export * from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js'
import { Node, WrapAsString } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        renderPixelatedPass: string[]
        renderPixelatedPassParameters: WrapAsString<RenderPixelatedPassParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        renderPixelatedPass: string[]
        renderPixelatedPassParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPixelatedPass.d.ts

consParams.renderPixelatedPassParameters = ([
    'normalEdgeStrength',
    'depthEdgeStrength',
] as const).toObject()


consParams.renderPixelatedPass = [
    'pixelSize',
    'scene',
    'camera',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPixelatedPass.d.ts

objParams.renderPixelatedPassParameters = [
    'normalEdgeStrength',
    'depthEdgeStrength',
].distinct()


objParams.renderPixelatedPass = [...objParams.pass,
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
].distinct()

export type RenderPixelatedPassProps = Node<RenderPixelatedPass, typeof RenderPixelatedPass, { pixelSize: number; scene: Scene; camera: Camera; options?: RenderPixelatedPassParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        renderPixelatedPass: Partial<{ pixelSize: number; scene: Scene; camera: Camera; options?: RenderPixelatedPassParameters; }>
    }
}

defaults.renderPixelatedPass = {}

