import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js'
export * from 'three/examples/jsm/textures/FlakesTexture.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FlakesTexture: typeof FlakesTexture
    }
}

Three.FlakesTexture = FlakesTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            flakesTexture: FlakesTextureProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        flakesTexture: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        flakesTexture: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\textures\FlakesTexture.d.ts

consParams.flakesTexture = [
    'width',
    'height',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\textures\FlakesTexture.d.ts    

objParams.flakesTexture = [
].distinct()

export type FlakesTextureProps = Node<FlakesTexture, typeof FlakesTexture, { width?: number; height?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        flakesTexture: { width?: number; height?: number; }
    }
}

defaults.flakesTexture = {}

