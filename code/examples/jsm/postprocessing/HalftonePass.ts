import { HalftonePassParameters, HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass.js'
export * from 'three/examples/jsm/postprocessing/HalftonePass.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        HalftonePass: typeof HalftonePass
    }
}

Three.HalftonePass = HalftonePass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            halftonePass: HalftonePassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        halftonePass: typeof halftonePass
        halftonePassParameters: typeof halftonePassParameters
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        halftonePass: typeof _halftonePass
        halftonePassParameters: typeof _halftonePassParameters
    }
}



const halftonePassParameters = ([
    'shape',
    'radius',
    'rotateR',
    'rotateB',
    'rotateG',
    'scatter',
    'blending',
    'blendingMode',
    'greyscale',
    'disable',
] as const).distinct()
consParams.halftonePassParameters = halftonePassParameters


const halftonePass = ([
    'width',
    'height',
    'params',
] as const).distinct()
consParams.halftonePass = halftonePass



const _halftonePassParameters = ([
    'shape',
    'radius',
    'rotateR',
    'rotateB',
    'rotateG',
    'scatter',
    'blending',
    'blendingMode',
    'greyscale',
    'disable',
] as const).distinct()
objProps.halftonePassParameters = _halftonePassParameters


const _halftonePass = ([...objProps.pass,
    'uniforms',
    'material',
    'fsQuad',
] as const).distinct()
objProps.halftonePass = _halftonePass

export type HalftonePassProps = Node<HalftonePass, typeof HalftonePass, { width: number; height: number; params: HalftonePassParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        halftonePass: Partial<{ width: number; height: number; params: HalftonePassParameters; }>
    }
}

defaults.halftonePass = {}

