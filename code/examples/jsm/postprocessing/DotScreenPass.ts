import { Node, Vector2 } from '../../../three-types'
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js'
export * from 'three/examples/jsm/postprocessing/DotScreenPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        dotScreenPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        dotScreenPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\DotScreenPass.d.ts

consParams.dotScreenPass = [
    'center',
    'angle',
    'scale',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\DotScreenPass.d.ts    

objParams.dotScreenPass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
].distinct()

export type DotScreenPassProps = Node<DotScreenPass, typeof DotScreenPass, { center?: Vector2; angle?: number; scale?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        dotScreenPass: Partial<{ center?: Vector2; angle?: number; scale?: number; }>
    }
}

defaults.dotScreenPass = {}

