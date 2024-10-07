import { BokehPassParamters, BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'
export * from 'three/examples/jsm/postprocessing/BokehPass.js'
import { Node } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        bokehPass: typeof bokehPass
        bokehPassParamters: typeof bokehPassParamters
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        bokehPass: typeof _bokehPass
        bokehPassParamters: typeof _bokehPassParamters
    }
}



const bokehPassParamters = ([
    'focus',
    'aspect',
    'aperture',
    'maxblur',
] as const).distinct()
consParams.bokehPassParamters = bokehPassParamters


const bokehPass = ([
    'scene',
    'camera',
    'params',
] as const).distinct()
consParams.bokehPass = bokehPass



const _bokehPassParamters = ([
    'focus',
    'aspect',
    'aperture',
    'maxblur',
] as const).distinct()
objProps.bokehPassParamters = _bokehPassParamters


const _bokehPass = ([...objProps.pass,
    'scene',
    'camera',
    'renderTargetColor',
    'renderTargetDepth',
    'materialDepth',
    'materialBokeh',
    'uniforms',
    'fsQuad',
    'oldClearColor',
] as const).distinct()
objProps.bokehPass = _bokehPass

export type BokehPassProps = Node<BokehPass, typeof BokehPass, { scene: Scene; camera: Camera; params: BokehPassParamters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bokehPass: Partial<{ scene: Scene; camera: Camera; params: BokehPassParamters; }>
    }
}

defaults.bokehPass = {}

