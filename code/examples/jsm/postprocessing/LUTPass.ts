import { LUTPassParameters, LUTPass } from 'three/examples/jsm/postprocessing/LUTPass.js'
export * from 'three/examples/jsm/postprocessing/LUTPass.js'
import { Node, WrapAsString } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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

declare module '../../../lib/3/objParams' {
    interface objParams {
        lutPass: string[]
        lutPassParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\LUTPass.d.ts

consParams.lutPassParameters = ([
    'lut',
    'intensity',
] as const).toObject()

consParams.lutPass = { ...consParams.lutPassParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\LUTPass.d.ts

objParams.lutPassParameters = [
    'lut',
    'intensity',
].distinct()

objParams.lutPass = [...objParams.shaderPass,
    'lut',
    'intensity',
].distinct()

export type LUTPassProps = Node<LUTPass, typeof LUTPass, LUTPassParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lutPass: LUTPassParameters
    }
}

defaults.lutPass = {}

