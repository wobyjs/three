import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
// import { ShaderNodeObject } from 'three/src/nodes/Nodes.js'
import EquirectUVNode from 'three/src/nodes/utils/EquirectUVNode.js'
export { EquirectUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'
import { ShaderNodeObject } from 'three/src/nodes/tsl/TSLCore'

declare module '../../../lib/3/three'
{
    interface Three {
        EquirectUVNode: typeof EquirectUVNode
    }
}

Three.EquirectUVNode = EquirectUVNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            equirectUVNode: EquirectUVNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        equirectUvNode: typeof equirectUvNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        equirectUvNode: typeof _equirectUvNode
    }
}


const equirectUvNode = ([
    'dirNode',
] as const).distinct()
consParams.equirectUvNode = equirectUvNode



const _equirectUvNode = ([...objProps.tempNode,
] as const).distinct()
objProps.equirectUvNode = _equirectUvNode

export type EquirectUVNodeProps = Node<EquirectUVNode, typeof EquirectUVNode, { dirNode?: ShaderNodeObject<ENode> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        equirectUVNode: Partial<{ dirNode?: ShaderNodeObject<any> }>
    }
}

defaults.equirectUVNode = {}
