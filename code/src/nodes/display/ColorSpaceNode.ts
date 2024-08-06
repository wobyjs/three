import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ColorSpaceNode, { ColorSpaceNodeMethod } from 'three/src/nodes/display/ColorSpaceNode.js'
export { ColorSpaceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ColorSpaceNode: typeof ColorSpaceNode
    }
}

Three.ColorSpaceNode = ColorSpaceNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colorSpaceNode: ColorSpaceNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        colorSpaceNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        colorSpaceNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorSpaceNode.d.ts

consParams.colorSpaceNode = [
    'method',
    'node',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorSpaceNode.d.ts    

objParams.colorSpaceNode = [...objParams.tempNode,
    'method',
    'node',
].distinct()

export type ColorSpaceNodeProps = Node<ColorSpaceNode, typeof ColorSpaceNode, { method: ColorSpaceNodeMethod | null; node: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        colorSpaceNode: Partial<{ method: ColorSpaceNodeMethod | null; node: ENode; }>
    }
}

defaults.colorSpaceNode = {}

