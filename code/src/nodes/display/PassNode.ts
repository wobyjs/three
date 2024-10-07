import { Scene } from 'three/src/scenes/Scene.js'
import { Node } from '../../../three-types'
import PassNode, { PassNodeScope } from 'three/src/nodes/display/PassNode.js'
import { Camera } from 'three/src/cameras/Camera.js'
export * from 'three/src/cameras/Camera.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

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
        passNode: typeof passNode
        passTextureNode: typeof passTextureNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        passNode: typeof _passNode
        passTextureNode: typeof _passTextureNode
    }
}



const passTextureNode = ([
    'passNode',
    'texture',
] as const).distinct()
consParams.passTextureNode = passTextureNode


const passNode = ([
    'scope',
    'scene',
    'camera',
] as const).distinct()
consParams.passNode = passNode



const _passTextureNode = ([...objProps.textureNode,
    'passNode',
] as const).distinct()
objProps.passTextureNode = _passTextureNode


const _passNode = ([...objProps.tempNode,
    'scope',
    'scene',
    'camera',
    'renderTarget',
] as const).distinct()
objProps.passNode = _passNode

export type PassNodeProps = Node<PassNode, typeof PassNode, { scope: PassNodeScope; scene: Scene; camera: Camera; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        passNode: Partial<{ scope: PassNodeScope; scene: Scene; camera: Camera; }>
    }
}

defaults.passNode = {}

