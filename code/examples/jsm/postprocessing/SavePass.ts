import { Node } from '../../../three-types'
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js'
export * from 'three/examples/jsm/postprocessing/SavePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        SavePass: typeof SavePass
    }
}

Three.SavePass = SavePass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            savePass: SavePassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        savePass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        savePass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SavePass.d.ts

consParams.savePass = [
    'renderTarget',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SavePass.d.ts    

objParams.savePass = [...objParams.pass,
    'textureID',
    'renderTarget',
    'uniforms',
    'material',
    'fsQuad',
].distinct()

export type SavePassProps = Node<SavePass, typeof SavePass, { renderTarget?: WebGLRenderTarget; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        savePass: Partial<{ renderTarget?: WebGLRenderTarget; }>
    }
}

defaults.savePass = {}

