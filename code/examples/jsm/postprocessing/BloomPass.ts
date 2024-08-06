import { Node } from '../../../three-types'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js'
export * from 'three/examples/jsm/postprocessing/BloomPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BloomPass: typeof BloomPass
    }
}

Three.BloomPass = BloomPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bloomPass: BloomPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bloomPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        bloomPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BloomPass.d.ts

consParams.bloomPass = [
    'strength',
    'kernelSize',
    'sigma',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BloomPass.d.ts    

objParams.bloomPass = [...objParams.pass,
    'renderTargetX',
    'renderTargetY',
    'copyUniforms',
    'materialCopy',
    'convolutionUniforms',
    'materialConvolution',
    'fsQuad',
].distinct()

export type BloomPassProps = Node<BloomPass, typeof BloomPass, { strength?: number; kernelSize?: number; sigma?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bloomPass: Partial<{ strength?: number; kernelSize?: number; sigma?: number; }>
    }
}

defaults.bloomPass = {}

