import { Node as ENode, FogNode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
export * from '../../../three-types'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FogNode: typeof FogNode
    }
}

Three.FogNode = FogNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogNode: FogNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fogNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        fogNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogNode.d.ts

consParams.fogNode = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogNode.d.ts    

objParams.fogNode = [...objParams.node,
    'isFogNode',
    'colorNode',
    'factorNode',
].distinct()

export type FogNodeProps = Node<FogNode, typeof FogNode, { colorNode: ENode | null; factorNode: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fogNode: Partial<{ colorNode: ENode | null; factorNode: ENode | null; }>
    }
}

defaults.fogNode = {}

