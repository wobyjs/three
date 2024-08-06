import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import AONode from 'three/src/nodes/lighting/AONode.js'
export { AONode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AONode: typeof AONode
    }
}

Three.AONode = AONode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            aoNode: AONodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        aoNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        aoNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AONode.d.ts

consParams.aoNode = [
    'aoNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AONode.d.ts    

objParams.aoNode = [...objParams.lightingNode,
    'aoNode',
].distinct()

export type AONodeProps = Node<AONode, typeof AONode, { aoNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        aoNode: { aoNode?: ENode | null; }
    }
}

defaults.aoNode = {}

