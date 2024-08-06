import { Node } from '../../../three-types'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
export * from 'three/examples/jsm/postprocessing/ShaderPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        ShaderPass: typeof ShaderPass
    }
}

Three.ShaderPass = ShaderPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shaderPass: ShaderPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shaderPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        shaderPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ShaderPass.d.ts

consParams.shaderPass = [
    'shader',
    'textureID',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ShaderPass.d.ts    

objParams.shaderPass = [...objParams.pass,
    'textureID',
    'uniforms',
    'material',
    'fsQuad',
].distinct()

export type ShaderPassProps = Node<ShaderPass, typeof ShaderPass, { shader: object; textureID?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shaderPass: Partial<{ shader: object; textureID?: string; }>
    }
}

defaults.shaderPass = {}

