import { Node } from '../../../three-types'
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js'
export * from 'three/examples/jsm/postprocessing/SMAAPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        SMAAPass: typeof SMAAPass
    }
}

Three.SMAAPass = SMAAPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            smaaPass: SMAAPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        smaaPass: typeof smaaPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        smaaPass: typeof _smaaPass
    }
}



const smaaPass = ([
    'width',
    'height',
] as const).distinct()
consParams.smaaPass = smaaPass



const _smaaPass = ([...objProps.pass,
    'edgesRT',
    'weightsRT',
    'areaTexture',
    'searchTexture',
    'uniformsEdges',
    'materialEdges',
    'uniformsWeights',
    'materialWeights',
    'uniformsBlend',
    'materialBlend',
    'fsQuad',
] as const).distinct()
objProps.smaaPass = _smaaPass

export type SMAAPassProps = Node<SMAAPass, typeof SMAAPass, { shader: object; textureID?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        smaaPass: Partial<{ shader: object; textureID?: string; }>
    }
}

defaults.smaaPass = {}

