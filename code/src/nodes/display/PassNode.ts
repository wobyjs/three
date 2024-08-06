import { Scene } from 'three/src/scenes/Scene.js'
import { Node } from '../../../three-types'
import PassNode, { PassNodeScope } from 'three/src/nodes/display/PassNode.js'
import { Camera } from 'three/src/cameras/Camera.js'
export * from 'three/src/cameras/Camera.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PassNode: typeof PassNode
    }
}

Three.PassNode = PassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            passNode: PassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        passNode: string[]
        passTextureNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        passNode: string[]
        passTextureNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PassNode.d.ts

consParams.passTextureNode = [
    'passNode',
    'texture',
].distinct()


consParams.passNode = [
    'scope',
    'scene',
    'camera',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PassNode.d.ts    

objParams.passTextureNode = [...objParams.textureNode,
    'passNode',
].distinct()


objParams.passNode = [...objParams.tempNode,
    'scope',
    'scene',
    'camera',
    'renderTarget',
].distinct()

export type PassNodeProps = Node<PassNode, typeof PassNode, { scope: PassNodeScope; scene: Scene; camera: Camera; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        passNode: Partial<{ scope: PassNodeScope; scene: Scene; camera: Camera; }>
    }
}

defaults.passNode = {}

