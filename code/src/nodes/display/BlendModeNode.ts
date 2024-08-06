import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import BlendModeNode, { BlendMode } from 'three/src/nodes/display/BlendModeNode.js'
export { BlendModeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BlendModeNode: typeof BlendModeNode
    }
}

Three.BlendModeNode = BlendModeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            blendModeNode: BlendModeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        blendModeNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        blendModeNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\BlendModeNode.d.ts

consParams.blendModeNode = [
    'blendMode',
    'baseNode',
    'blendNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\BlendModeNode.d.ts    

objParams.blendModeNode = [...objParams.tempNode,
    'baseNode',
    'blendMode',
    'blendNode',
].distinct()

export type BlendModeNodeProps = Node<BlendModeNode, typeof BlendModeNode, { blendMode: BlendMode; baseNode: ENode; blendNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        blendModeNode: Partial<{ blendMode: BlendMode; baseNode: ENode; blendNode: ENode; }>
    }
}

defaults.blendModeNode = {}

