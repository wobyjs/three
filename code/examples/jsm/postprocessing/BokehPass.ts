import { BokehPassParamters, BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'
export * from 'three/examples/jsm/postprocessing/BokehPass.js'
import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BokehPass: typeof BokehPass
    }
}

Three.BokehPass = BokehPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bokehPass: BokehPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bokehPass: string[]
        bokehPassParamters: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        bokehPass: string[]
        bokehPassParamters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BokehPass.d.ts

consParams.bokehPassParamters = [
    'focus',
    'aspect',
    'aperture',
    'maxblur',
].distinct()


consParams.bokehPass = [
    'scene',
    'camera',
    'params',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BokehPass.d.ts

objParams.bokehPassParamters = [
    'focus',
    'aspect',
    'aperture',
    'maxblur',
].distinct()


objParams.bokehPass = [...objParams.pass,
    'scene',
    'camera',
    'renderTargetColor',
    'renderTargetDepth',
    'materialDepth',
    'materialBokeh',
    'uniforms',
    'fsQuad',
    'oldClearColor',
].distinct()

export type BokehPassProps = Node<BokehPass, typeof BokehPass, { scene: Scene; camera: Camera; params: BokehPassParamters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bokehPass: Partial<{ scene: Scene; camera: Camera; params: BokehPassParamters; }>
    }
}

defaults.bokehPass = {}

