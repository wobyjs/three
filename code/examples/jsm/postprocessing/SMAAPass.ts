import { Node } from '../../../three-types'
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js'
export * from 'three/examples/jsm/postprocessing/SMAAPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        smaaPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        smaaPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SMAAPass.d.ts

consParams.smaaPass = [
    'width',
    'height',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SMAAPass.d.ts    

objParams.smaaPass = [...objParams.pass,
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
].distinct()

export type SMAAPassProps = Node<SMAAPass, typeof SMAAPass, { shader: object; textureID?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        smaaPass: Partial<{ shader: object; textureID?: string; }>
    }
}

defaults.smaaPass = {}

