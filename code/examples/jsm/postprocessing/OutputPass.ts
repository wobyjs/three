import { Node } from '../../../three-types'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
export * from 'three/examples/jsm/postprocessing/OutputPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        OutputPass: typeof OutputPass
    }
}

Three.OutputPass = OutputPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outputPass: OutputPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        outputPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        outputPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutputPass.d.ts

consParams.outputPass = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutputPass.d.ts    

objParams.outputPass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
].distinct()

export type OutputPassProps = Node<OutputPass, typeof OutputPass, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        outputPass: Partial<{}>
    }
}

defaults.outputPass = {}

