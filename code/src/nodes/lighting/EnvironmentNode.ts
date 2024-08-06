import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import EnvironmentNode from 'three/src/nodes/lighting/EnvironmentNode.js'
export { EnvironmentNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        EnvironmentNode: typeof EnvironmentNode
    }
}

Three.EnvironmentNode = EnvironmentNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            environmentNode: EnvironmentNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        environmentNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        environmentNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\EnvironmentNode.d.ts

consParams.environmentNode = [
    'envNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\EnvironmentNode.d.ts    

objParams.environmentNode = [...objParams.lightingNode,
    'envNode',
].distinct()

export type EnvironmentNodeProps = Node<EnvironmentNode, typeof EnvironmentNode, { envNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        environmentNode: { envNode?: ENode | null; }
    }
}

defaults.environmentNode = {}

