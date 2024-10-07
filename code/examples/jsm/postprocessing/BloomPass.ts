import { Node } from '../../../three-types'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js'
export * from 'three/examples/jsm/postprocessing/BloomPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BloomPass: typeof BloomPass
    }
}

Three.BloomPass = BloomPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bloomPass: BloomPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bloomPass: typeof bloomPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        bloomPass: typeof _bloomPass
    }
}



const bloomPass = ([
    'strength',
    'kernelSize',
    'sigma',
] as const).distinct()
consParams.bloomPass = bloomPass



const _bloomPass = ([...objProps.pass,
    'renderTargetX',
    'renderTargetY',
    'copyUniforms',
    'materialCopy',
    'convolutionUniforms',
    'materialConvolution',
    'fsQuad',
] as const).distinct()
objProps.bloomPass = _bloomPass

export type BloomPassProps = Node<BloomPass, typeof BloomPass, { strength?: number; kernelSize?: number; sigma?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bloomPass: Partial<{ strength?: number; kernelSize?: number; sigma?: number; }>
    }
}

defaults.bloomPass = {}

