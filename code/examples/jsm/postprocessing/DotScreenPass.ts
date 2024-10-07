import { Node, Vector2 } from '../../../three-types'
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js'
export * from 'three/examples/jsm/postprocessing/DotScreenPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        DotScreenPass: typeof DotScreenPass
    }
}

Three.DotScreenPass = DotScreenPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dotScreenPass: DotScreenPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        dotScreenPass: typeof dotScreenPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        dotScreenPass: typeof _dotScreenPass
    }
}



const dotScreenPass = ([
    'center',
    'angle',
    'scale',
] as const).distinct()
consParams.dotScreenPass = dotScreenPass



const _dotScreenPass = ([...objProps.pass,
    'uniforms',
    'material',
    'fsQuad',
] as const).distinct()
objProps.dotScreenPass = _dotScreenPass

export type DotScreenPassProps = Node<DotScreenPass, typeof DotScreenPass, { center?: Vector2; angle?: number; scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        dotScreenPass: Partial<{ center?: Vector2; angle?: number; scale?: number; }>
    }
}

defaults.dotScreenPass = {}

