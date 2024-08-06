import { Node } from '../../../three-types'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'
export * from 'three/examples/jsm/postprocessing/GlitchPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        glitchPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        glitchPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GlitchPass.d.ts

consParams.glitchPass = [
    'dt_size',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GlitchPass.d.ts    

objParams.glitchPass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
    'goWild',
    'curF',
    'randX',
].distinct()

export type GlitchPassProps = Node<GlitchPass, typeof GlitchPass, { dt_size?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        glitchPass: Partial<{ dt_size?: number; }>
    }
}

defaults.glitchPass = {}

