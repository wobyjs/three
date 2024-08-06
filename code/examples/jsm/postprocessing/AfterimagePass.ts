import { Node } from '../../../three-types'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'
export * from 'three/examples/jsm/postprocessing/AfterimagePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AfterimagePass: typeof AfterimagePass
    }
}

Three.AfterimagePass = AfterimagePass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            afterimagePass: AfterimagePassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        afterimagePass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        afterimagePass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\AfterimagePass.d.ts

consParams.afterimagePass = [
    'damp',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\AfterimagePass.d.ts    

objParams.afterimagePass = [...objParams.pass,
    'shader',
    'uniforms',
    'textureComp',
    'textureOld',
    'shaderMaterial',
    'compFsQuad',
    'copyFsQuad',
].distinct()

export type AfterimagePassProps = Node<AfterimagePass, typeof AfterimagePass, { damp?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        afterimagePass: Partial<{ damp?: number; }>
    }
}

defaults.afterimagePass = {}

