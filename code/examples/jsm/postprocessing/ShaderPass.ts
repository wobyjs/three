import { Node } from '../../../three-types'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
export * from 'three/examples/jsm/postprocessing/ShaderPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        shaderPass: typeof shaderPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        shaderPass: typeof _shaderPass
    }
}



const shaderPass = ([
    'shader',
    'textureID',
] as const).distinct()
consParams.shaderPass = shaderPass



const _shaderPass = ([...objProps.pass,
    'textureID',
    'uniforms',
    'material',
    'fsQuad',
] as const).distinct()
objProps.shaderPass = _shaderPass

export type ShaderPassProps = Node<ShaderPass, typeof ShaderPass, { shader: object; textureID?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shaderPass: Partial<{ shader: object; textureID?: string; }>
    }
}

defaults.shaderPass = {}

