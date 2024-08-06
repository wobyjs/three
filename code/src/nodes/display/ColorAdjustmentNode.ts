import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ColorAdjustmentNode, { ColorAdjustmentMethod } from 'three/src/nodes/display/ColorAdjustmentNode.js'
export { ColorAdjustmentNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ColorAdjustmentNode: typeof ColorAdjustmentNode
    }
}

Three.ColorAdjustmentNode = ColorAdjustmentNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colorAdjustmentNode: ColorAdjustmentNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        colorAdjustmentNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        colorAdjustmentNode: string[]
    }
}
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorAdjustmentNode.d.ts

consParams.colorAdjustmentNode = [
    'method',
    'colorNode',
    'adjustmentNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorAdjustmentNode.d.ts    

objParams.colorAdjustmentNode = [...objParams.tempNode,
    'method',
    'colorNode',
    'adjustmentNode',
].distinct()

export type ColorAdjustmentNodeProps = Node<ColorAdjustmentNode, typeof ColorAdjustmentNode, { method: ColorAdjustmentMethod; colorNode: ENode; adjustmentNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        colorAdjustmentNode: Partial<{ method: ColorAdjustmentMethod; colorNode: ENode; adjustmentNode?: ENode; }>
    }
}

defaults.colorAdjustmentNode = {}

