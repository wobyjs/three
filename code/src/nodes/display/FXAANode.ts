import { Node } from '../../../three-types'
import { TextureNode } from 'three/src/nodes/Nodes.js'
import FXAANode from 'three/src/nodes/display/FXAANode.js'
export { FXAANode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        FXAANode: typeof FXAANode
    }
}

Three.FXAANode = FXAANode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fxaaNode: FXAANodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fxaaNode: typeof fxaaNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        fxaaNode: typeof _fxaaNode
    }
}


const fxaaNode = ([
    'textureNode',
] as const).distinct()
consParams.fxaaNode = fxaaNode

const _fxaaNode = ([...objProps.tempNode,
    'textureNode',
] as const).distinct()
objProps.fxaaNode = _fxaaNode

export type FXAANodeProps = Node<FXAANode, typeof FXAANode, { textureNode: TextureNode }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fxaaNode: Partial<{ textureNode: TextureNode }>
    }
}

defaults.fxaaNode = {}

