import { Node } from '../../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js'
export * from 'three/examples/jsm/postprocessing/ClearPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        clearPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        clearPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ClearPass.d.ts

consParams.clearPass = [
    'clearColor',
    'clearAlpha',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ClearPass.d.ts    

objParams.clearPass = [...objParams.pass,
    'clearColor',
    'clearAlpha',
].distinct()

export type ClearPassProps = Node<ClearPass, typeof ClearPass, { clearColor?: ColorRepresentation; clearAlpha?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        clearPass: Partial<{ clearColor?: ColorRepresentation; clearAlpha?: number; }>
    }
}

defaults.clearPass = {}

