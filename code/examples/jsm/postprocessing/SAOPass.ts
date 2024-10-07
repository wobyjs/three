import { Node, Vector2 } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass.js'
export * from 'three/examples/jsm/postprocessing/SAOPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        saoPass: typeof saoPass
        saoPassParams: typeof saoPassParams
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        saoPass: typeof _saoPass
        saoPassParams: typeof _saoPassParams
    }
}



const saoPassParams = ([
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
] as const).distinct()
consParams.saoPassParams = saoPassParams


const saoPass = ([
    'scene',
    'camera',
    'resolution',
] as const).distinct()
consParams.saoPass = saoPass



const _saoPassParams = ([
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
] as const).distinct()
objProps.saoPassParams = _saoPassParams


const _saoPass = ([...objProps.pass,
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
] as const).distinct()
objProps.saoPass = _saoPass

export type SAOPassProps = Node<SAOPass, typeof SAOPass, { scene: Scene; camera: Camera; resolution?: Vector2; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        saoPass: Partial<{ scene: Scene; camera: Camera; resolution?: Vector2; }>
    }
}

defaults.saoPass = {}

