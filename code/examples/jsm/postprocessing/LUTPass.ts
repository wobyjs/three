import { LUTPassParameters, LUTPass } from 'three/examples/jsm/postprocessing/LUTPass.js'
export * from 'three/examples/jsm/postprocessing/LUTPass.js'
import { Node, WrapAsString } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        LUTPass: typeof LUTPass
    }
}

Three.LUTPass = LUTPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lutPass: LUTPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lutPass: WrapAsString<LUTPassParameters>
        lutPassParameters: WrapAsString<LUTPassParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lutPass: typeof _lutPass
        lutPassParameters: typeof _lutPassParameters
    }
}



consParams.lutPassParameters = ([
    'lut',
    'intensity',
] as const).toObject()

consParams.lutPass = { ...consParams.lutPassParameters }



const _lutPassParameters = ([
    'lut',
    'intensity',
] as const).distinct()
objProps.lutPassParameters = _lutPassParameters

const _lutPass = ([...objProps.shaderPass,
    'lut',
    'intensity',
] as const).distinct()
objProps.lutPass = _lutPass

export type LUTPassProps = Node<LUTPass, typeof LUTPass, LUTPassParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lutPass: LUTPassParameters
    }
}

defaults.lutPass = {}

