import { Node } from '../../../three-types'
import { Texture } from 'three/src/textures/Texture.js'
import { TextureHelper } from 'three/examples/jsm/helpers/TextureHelper.js'
export * from 'three/examples/jsm/helpers/TextureHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        textureHelper: typeof textureHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        textureHelper: typeof _textureHelper
    }
}



const textureHelper = ([
    'texture',
    'width',
    'height',
    'depth',
] as const).distinct()
consParams.textureHelper = textureHelper



const _textureHelper = ([...objProps.mesh,
    'texture',
] as const).distinct()
objProps.textureHelper = _textureHelper

export type TextureHelperProps = Node<TextureHelper, typeof TextureHelper, { texture: Texture; width?: number; height?: number; depth?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        textureHelper: Partial<{ texture: Texture; width?: number; height?: number; depth?: number; }>
    }
}

defaults.textureHelper = {}

