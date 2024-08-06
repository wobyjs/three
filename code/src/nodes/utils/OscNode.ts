import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import OscNode, { OscNodeMethod } from 'three/src/nodes/utils/OscNode.js'
export { OscNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        OscNode: typeof OscNode
    }
}

Three.OscNode = OscNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            oscNode: OscNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        oscNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        oscNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\OscNode.d.ts

consParams.oscNode = [
    'method',
    'timeNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\OscNode.d.ts    

objParams.oscNode = [...objParams.node,
    'method',
    'timeNode',
].distinct()

export type OscNodeProps = Node<OscNode, typeof OscNode, { method: OscNodeMethod; timeNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        oscNode: Partial<{ method?: OscNodeMethod; timeNode?: ENode; }>
    }
}

defaults.oscNode = {}

