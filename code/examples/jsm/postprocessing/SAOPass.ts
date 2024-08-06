import { Node, Vector2 } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass.js'
export * from 'three/examples/jsm/postprocessing/SAOPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        SAOPass: typeof SAOPass
    }
}

Three.SAOPass = SAOPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            saoPass: SAOPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        saoPass: string[]
        saoPassParams: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        saoPass: string[]
        saoPassParams: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SAOPass.d.ts

consParams.saoPassParams = [
    'output',
    'saoBias',
    'saoIntensity',
    'saoScale',
    'saoKernelRadius',
    'saoMinResolution',
    'saoBlur',
    'saoBlurRadius',
    'saoBlurStdDev',
    'saoBlurDepthCutoff',
].distinct()


consParams.saoPass = [
    'scene',
    'camera',
    'resolution',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SAOPass.d.ts

objParams.saoPassParams = [
    'output',
    'saoBias',
    'saoIntensity',
    'saoScale',
    'saoKernelRadius',
    'saoMinResolution',
    'saoBlur',
    'saoBlurRadius',
    'saoBlurStdDev',
    'saoBlurDepthCutoff',
].distinct()


objParams.saoPass = [...objParams.pass,
    'scene',
    'camera',
    'originalClearColor',
    'oldClearColor',
    'oldClearAlpha',
    'resolution',
    'saoRenderTarget',
    'blurIntermediateRenderTarget',
    'normalRenderTarget',
    'normalMaterial',
    'saoMaterial',
    'vBlurMaterial',
    'hBlurMaterial',
    'materialCopy',
    'fsQuad',
    'params',
].distinct()

export type SAOPassProps = Node<SAOPass, typeof SAOPass, { scene: Scene; camera: Camera; resolution?: Vector2; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        saoPass: Partial<{ scene: Scene; camera: Camera; resolution?: Vector2; }>
    }
}

defaults.saoPass = {}

