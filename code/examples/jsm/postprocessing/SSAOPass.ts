import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js'
export * from 'three/examples/jsm/postprocessing/SSAOPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        SSAOPass: typeof SSAOPass
    }
}

Three.SSAOPass = SSAOPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ssaoPass: SSAOPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ssaoPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ssaoPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAOPass.d.ts

consParams.ssaoPass = [
    'scene',
    'camera',
    'width',
    'height',
    'kernelSize',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAOPass.d.ts    

objParams.ssaoPass = [...objParams.pass,
    'scene',
    'camera',
    'width',
    'height',
    'clear',
    'kernelRadius',
    'kernel',
    'noiseTexture',
    'output',
    'minDistance',
    'maxDistance',
    'normalRenderTarget',
    'ssaoRenderTarget',
    'blurRenderTarget',
    'ssaoMaterial',
    'normalMaterial',
    'blurMaterial',
    'depthRenderMaterial',
    'copyMaterial',
    'fsQuad',
    'originalClearColor',
].distinct()

export type SSAOPassProps = Node<SSAOPass, typeof SSAOPass, { scene: Scene; camera: Camera; width?: number; height?: number; kernelSize?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        sSAOPass: Partial<{ scene: Scene; camera: Camera; width?: number; height?: number; kernelSize?: number; }>
    }
}

defaults.sSAOPass = {}

