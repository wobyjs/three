import { Node } from '../../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js'
export * from 'three/examples/jsm/postprocessing/ClearPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        ClearPass: typeof ClearPass
    }
}

Three.ClearPass = ClearPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            clearPass: ClearPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        clearPass: typeof clearPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        clearPass: typeof _clearPass
    }
}



const clearPass = ([
    'clearColor',
    'clearAlpha',
] as const).distinct()
consParams.clearPass = clearPass



const _clearPass = ([...objProps.pass,
    'clearColor',
    'clearAlpha',
] as const).distinct()
objProps.clearPass = _clearPass

export type ClearPassProps = Node<ClearPass, typeof ClearPass, { clearColor?: ColorRepresentation; clearAlpha?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        clearPass: Partial<{ clearColor?: ColorRepresentation; clearAlpha?: number; }>
    }
}

defaults.clearPass = {}

