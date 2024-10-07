import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ColorSpaceNode from 'three/src/nodes/display/ColorSpaceNode.js'
export { ColorSpaceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'
import { ColorSpace } from 'three/src/constants'

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
        colorSpaceNode: typeof colorSpaceNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        colorSpaceNode: typeof _colorSpaceNode
    }
}



const colorSpaceNode = ([
    'method',
    'node',
] as const).distinct()
consParams.colorSpaceNode = colorSpaceNode



const _colorSpaceNode = ([...objProps.tempNode,
    'method',
    'node',
] as const).distinct()
objProps.colorSpaceNode = _colorSpaceNode

export type ColorSpaceNodeProps = Node<ColorSpaceNode, typeof ColorSpaceNode, { colorNode: ENode, target?: ColorSpace | null, source?: ColorSpace | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        colorSpaceNode: Partial<{ colorNode: ENode, target?: ColorSpace | null, source?: ColorSpace | null }>
    }
}

defaults.colorSpaceNode = {}

