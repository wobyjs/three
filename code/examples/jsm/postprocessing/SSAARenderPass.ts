import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass.js'
export * from 'three/examples/jsm/postprocessing/SSAARenderPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        ssaaRenderPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ssaaRenderPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAARenderPass.d.ts

consParams.ssaaRenderPass = [
    'scene',
    'camera',
    'clearColor',
    'clearAlpha',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAARenderPass.d.ts    

objParams.ssaaRenderPass = [...objParams.pass,
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
].distinct()

export type SSAARenderPassProps = Node<SSAARenderPass, typeof SSAARenderPass, { scene: Scene; camera: Camera; clearColor?: ColorRepresentation; clearAlpha?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ssaaRenderPass: Partial<{ scene: Scene; camera: Camera; clearColor?: ColorRepresentation; clearAlpha?: number; }>
    }
}

defaults.ssaaRenderPass = {}

