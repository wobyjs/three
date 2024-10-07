import { Node } from '../../../three-types'
import { Texture } from 'three/src/textures/Texture.js'
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js'
export * from 'three/examples/jsm/postprocessing/TexturePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        texturePass: typeof texturePass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        texturePass: typeof _texturePass
    }
}



const texturePass = ([
    'map',
    'opacity',
] as const).distinct()
consParams.texturePass = texturePass



const _texturePass = ([...objProps.pass,
    'map',
    'opacity',
    'uniforms',
    'material',
    'fsQuad',
] as const).distinct()
objProps.texturePass = _texturePass

export type TexturePassProps = Node<TexturePass, typeof TexturePass, { map?: Texture; opacity?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        texturePass: Partial<{ map?: Texture; opacity?: number; }>
    }
}

defaults.texturePass = {}

