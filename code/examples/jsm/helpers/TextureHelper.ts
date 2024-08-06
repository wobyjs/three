import { Node } from '../../../three-types'
import { Texture } from 'three/src/textures/Texture.js'
import { TextureHelper } from 'three/examples/jsm/helpers/TextureHelper.js'
export * from 'three/examples/jsm/helpers/TextureHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TextureHelper: typeof TextureHelper
    }
}

Three.TextureHelper = TextureHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureHelper: TextureHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        textureHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        textureHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\TextureHelper.d.ts

consParams.textureHelper = [
    'texture',
    'width',
    'height',
    'depth',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\TextureHelper.d.ts    

objParams.textureHelper = [...objParams.mesh,
    'texture',
].distinct()

export type TextureHelperProps = Node<TextureHelper, typeof TextureHelper, { texture: Texture; width?: number; height?: number; depth?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        textureHelper: Partial<{ texture: Texture; width?: number; height?: number; depth?: number; }>
    }
}

defaults.textureHelper = {}

