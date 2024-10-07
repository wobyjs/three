import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js'
export * from 'three/examples/jsm/postprocessing/MaskPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        maskPass: typeof maskPass
        clearMaskPass: typeof clearMaskPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        maskPass: typeof _maskPass
        clearMaskPass: typeof _clearMaskPass
    }
}



const maskPass = ([
    'scene',
    'camera',
] as const).distinct()
consParams.maskPass = maskPass

const clearMaskPass = ([
] as const).distinct()
consParams.clearMaskPass = clearMaskPass



const _maskPass = ([...objProps.pass,
    'scene',
    'camera',
    'inverse',
] as const).distinct()
objProps.maskPass = _maskPass

const _clearMaskPass = ([...objProps.pass,
] as const).distinct()
objProps.clearMaskPass = _clearMaskPass

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

