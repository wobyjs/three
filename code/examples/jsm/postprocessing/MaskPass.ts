import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js'
export * from 'three/examples/jsm/postprocessing/MaskPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        MaskPass: typeof MaskPass
    }
}

Three.MaskPass = MaskPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            maskPass: MaskPassProps,
            clearMaskPass: ClearMaskPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        maskPass: string[]
        clearMaskPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        maskPass: string[]
        clearMaskPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\MaskPass.d.ts

consParams.maskPass = [
    'scene',
    'camera',
].distinct()

consParams.clearMaskPass = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\MaskPass.d.ts    

objParams.maskPass = [...objParams.pass,
    'scene',
    'camera',
    'inverse',
].distinct()

objParams.clearMaskPass = [...objParams.pass,
].distinct()

export type MaskPassProps = Node<MaskPass, typeof MaskPass, { scene: Scene; camera: Camera; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        maskPass: Partial<{ scene: Scene; camera: Camera; }>
    }
}

defaults.maskPass = {}

export type ClearMaskPassProps = Node<ClearMaskPass, typeof ClearMaskPass, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        clearMaskPass: Partial<{}>
    }
}

defaults.clearMaskPass = {}

