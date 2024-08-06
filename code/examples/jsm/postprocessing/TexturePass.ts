import { Node } from '../../../three-types'
import { Texture } from 'three/src/textures/Texture.js'
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js'
export * from 'three/examples/jsm/postprocessing/TexturePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        TexturePass: typeof TexturePass
    }
}

Three.TexturePass = TexturePass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            texturePass: TexturePassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        texturePass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        texturePass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TexturePass.d.ts

consParams.texturePass = [
    'map',
    'opacity',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TexturePass.d.ts    

objParams.texturePass = [...objParams.pass,
    'map',
    'opacity',
    'uniforms',
    'material',
    'fsQuad',
].distinct()

export type TexturePassProps = Node<TexturePass, typeof TexturePass, { map?: Texture; opacity?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        texturePass: Partial<{ map?: Texture; opacity?: number; }>
    }
}

defaults.texturePass = {}

