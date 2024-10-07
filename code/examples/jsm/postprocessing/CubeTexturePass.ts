import { Node } from '../../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass.js'
export * from 'three/examples/jsm/postprocessing/CubeTexturePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CubeTexturePass: typeof CubeTexturePass
    }
}

Three.CubeTexturePass = CubeTexturePass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeTexturePass: CubeTexturePassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        cubeTexturePass: typeof cubeTexturePass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        cubeTexturePass: typeof _cubeTexturePass
    }
}



const cubeTexturePass = ([
    'camera',
    'envMap',
    'opacity',
] as const).distinct()
consParams.cubeTexturePass = cubeTexturePass



const _cubeTexturePass = ([...objProps.pass,
    'camera',
    'cubeShader',
    'cubeMesh',
    'envMap',
    'opacity',
    'cubeScene',
    'cubeCamera',
] as const).distinct()
objProps.cubeTexturePass = _cubeTexturePass

export type CubeTexturePassProps = Node<CubeTexturePass, typeof CubeTexturePass, { clearColor?: ColorRepresentation; clearAlpha?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cubeTexturePass: Partial<{ clearColor?: ColorRepresentation; clearAlpha?: number; }>
    }
}

defaults.cubeTexturePass = {}

