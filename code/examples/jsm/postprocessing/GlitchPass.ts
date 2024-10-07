import { Node } from '../../../three-types'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'
export * from 'three/examples/jsm/postprocessing/GlitchPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        GlitchPass: typeof GlitchPass
    }
}

Three.GlitchPass = GlitchPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            glitchPass: GlitchPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        glitchPass: typeof glitchPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        glitchPass: typeof _glitchPass
    }
}



const glitchPass = ([
    'dt_size',
] as const).distinct()
consParams.glitchPass = glitchPass



const _glitchPass = ([...objProps.pass,
    'uniforms',
    'material',
    'fsQuad',
    'goWild',
    'curF',
    'randX',
] as const).distinct()
objProps.glitchPass = _glitchPass

export type GlitchPassProps = Node<GlitchPass, typeof GlitchPass, { dt_size?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        glitchPass: Partial<{ dt_size?: number; }>
    }
}

defaults.glitchPass = {}

