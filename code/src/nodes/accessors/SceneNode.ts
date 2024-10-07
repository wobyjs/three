import { Node } from '../../../three-types'
import SceneNode, { SceneNodeScope } from 'three/src/nodes/accessors/SceneNode.js'
export { SceneNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Scene } from 'code/src/scenes/Scene'

declare module '../../../lib/3/three'
{
    interface Three {
        SceneNode: typeof SceneNode
    }
}

Three.SceneNode = SceneNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sceneNode: SceneNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        sceneNode: typeof sceneNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        sceneNode: typeof _sceneNode
    }
}


const sceneNode = ([
    'skinnedMesh',
    'useReference',
] as const).distinct()
consParams.sceneNode = sceneNode



const _sceneNode = ([...objProps.node,
    'scope',
    'scene',
] as const).distinct()
objProps.sceneNode = _sceneNode

export type SceneNodeProps = Node<SceneNode, typeof SceneNode, { scope?: SceneNodeScope, scene?: Scene | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        sceneNode: { scope?: SceneNodeScope, scene?: Scene | null }
    }
}

defaults.sceneNode = {}

