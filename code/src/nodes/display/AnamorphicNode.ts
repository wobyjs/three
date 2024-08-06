import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import AnamorphicNode from 'three/src/nodes/display/AnamorphicNode.js'
export { AnamorphicNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AnamorphicNode: typeof AnamorphicNode
    }
}

Three.AnamorphicNode = AnamorphicNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            anamorphicNode: AnamorphicNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        anamorphicNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        anamorphicNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AnamorphicNode.d.ts

consParams.anamorphicNode = [
    'textureNode',
    'thresholdNode',
    'scaleNode',
    'samples',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AnamorphicNode.d.ts    

objParams.anamorphicNode = [...objParams.tempNode,
    'textureNode',
    'thresholdNode',
    'scaleNode',
    'samples',
    'resolution',
].distinct()

export type AnamorphicNodeProps = Node<AnamorphicNode, typeof AnamorphicNode, { textureNode: ENode; thresholdNode: ENode; scaleNode: ENode; samples: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        anamorphicNode: Partial<{ textureNode: ENode; thresholdNode: ENode; scaleNode: ENode; samples: number; }>
    }
}

defaults.anamorphicNode = {}

