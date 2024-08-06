import { Node } from '../../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass.js'
export * from 'three/examples/jsm/postprocessing/CubeTexturePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        cubeTexturePass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        cubeTexturePass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\CubeTexturePass.d.ts

consParams.cubeTexturePass = [
    'camera',
    'envMap',
    'opacity',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\CubeTexturePass.d.ts    

objParams.cubeTexturePass = [...objParams.pass,
    'camera',
    'cubeShader',
    'cubeMesh',
    'envMap',
    'opacity',
    'cubeScene',
    'cubeCamera',
].distinct()

export type CubeTexturePassProps = Node<CubeTexturePass, typeof CubeTexturePass, { clearColor?: ColorRepresentation; clearAlpha?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cubeTexturePass: Partial<{ clearColor?: ColorRepresentation; clearAlpha?: number; }>
    }
}

defaults.cubeTexturePass = {}

