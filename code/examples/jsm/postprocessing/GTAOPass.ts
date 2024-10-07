import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { DepthTexture } from 'three/src/textures/DepthTexture.js'
import { Texture } from 'three/src/textures/Texture.js'
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js'
export * from 'three/examples/jsm/postprocessing/GTAOPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        GTAOPass: typeof GTAOPass
    }
}

Three.GTAOPass = GTAOPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gtaoPass: GTAOPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gtaoPass: typeof gtaoPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gtaoPass: typeof _gtaoPass
    }
}



const gtaoPass = ([
    'scene',
    'camera',
    'width',
    'height',
    'parameters', //{ depthTexture?: DepthTexture | undefined; normalTexture?: Texture | undefined } | undefined
] as const).distinct()
consParams.gtaoPass = gtaoPass



const _gtaoPass = ([...objProps.pass,
    'width',
    'height',
    'clear',
    'camera',
    'scene',
    'output',
    'blendIntensity',
    'pdRings',
    'pdRadiusExponent',
    'pdSamples',
    'gtaoNoiseTexture',
    'pdNoiseTexture',
    'gtaoRenderTarget',
    'pdRenderTarget',
    'gtaoMaterial',
    'normalMaterial',
    'pdMaterial',
    'depthRenderMaterial',
    'copyMaterial',
    'blendMaterial',
    'fsQuad',
    'originalClearColor',
    'depthTexture',
    'normalTexture',
] as const).distinct()
objProps.gtaoPass = _gtaoPass

export type GTAOPassProps = Node<GTAOPass, typeof GTAOPass, { scene: Scene; camera: Camera; width?: number | undefined; height?: number | undefined; parameters?: { depthTexture?: DepthTexture | undefined; normalTexture?: Texture | undefined; } | undefined; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gtaoPass: Partial<{ scene: Scene; camera: Camera; width?: number | undefined; height?: number | undefined; parameters?: { depthTexture?: DepthTexture | undefined; normalTexture?: Texture | undefined } }>
    }
}

defaults.gtaoPass = {}

