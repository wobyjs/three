import { Node } from '../../../three-types'
import RangeNode, { RangeModeBound } from 'three/src/nodes/geometry/RangeNode.js'
export { RangeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RangeNode: typeof RangeNode
    }
}

Three.RangeNode = RangeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rangeNode: RangeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rangeNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rangeNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\geometry\RangeNode.d.ts

consParams.rangeNode = [
    'min',
    'max',
].distinct()
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\gpgpu\ComputeNode.d.ts    

objParams.computeNode = [...objParams.node,
    'isComputeNode',
    'count',
    'workgroupSize',
    'dispatchCount',
].distinct()

export type RangeNodeProps = Node<RangeNode, typeof RangeNode, { min: RangeModeBound; max: RangeModeBound; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rangeNode: Partial<{ min: RangeModeBound; max: RangeModeBound; }>
    }
}

defaults.rangeNode = {}

