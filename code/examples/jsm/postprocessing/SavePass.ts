import { Node } from '../../../three-types'
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js'
export * from 'three/examples/jsm/postprocessing/SavePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        savePass: typeof savePass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        savePass: typeof _savePass
    }
}



const savePass = ([
    'renderTarget',
] as const).distinct()
consParams.savePass = savePass



const _savePass = ([...objProps.pass,
    'textureID',
    'renderTarget',
    'uniforms',
    'material',
    'fsQuad',
] as const).distinct()
objProps.savePass = _savePass

export type SavePassProps = Node<SavePass, typeof SavePass, { renderTarget?: WebGLRenderTarget; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        savePass: Partial<{ renderTarget?: WebGLRenderTarget; }>
    }
}

defaults.savePass = {}

