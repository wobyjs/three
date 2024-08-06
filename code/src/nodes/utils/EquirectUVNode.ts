import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { ShaderNodeObject } from 'three/src/nodes/Nodes.js'
import EquirectUVNode from 'three/src/nodes/utils/EquirectUVNode.js'
export { EquirectUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

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
        equirectUvNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        equirectUvNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\EquirectUVNode.d.ts

consParams.equirectUvNode = [
    'dirNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\EquirectUvNode.d.ts    

objParams.equirectUvNode = [...objParams.tempNode,
].distinct()

export type EquirectUVNodeProps = Node<EquirectUVNode, typeof EquirectUVNode, { dirNode?: ShaderNodeObject<ENode> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        equirectUVNode: Partial<{ dirNode?: ShaderNodeObject<any> }>
    }
}

defaults.equirectUVNode = {}
