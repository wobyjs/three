import { Node } from '../../../three-types'
import { TextureNode } from 'three/src/nodes/Nodes.js'
import RGBShiftNode from 'three/src/nodes/display/RGBShiftNode.js'
export { RGBShiftNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        RGBShiftNode: typeof RGBShiftNode
    }
}

Three.RGBShiftNode = RGBShiftNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rgbShiftNode: RGBShiftNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rgbShiftNode: typeof rgbShiftNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rgbShiftNode: typeof _rgbShiftNode
    }
}


const rgbShiftNode = ([
    'textureNode',
    'amount',
    'angle',
] as const).distinct()
consParams.rgbShiftNode = rgbShiftNode

const _rgbShiftNode = ([...objProps.tempNode,
    'textureNode',
    'amount',
    'angle',
] as const).distinct()
objProps.rgbShiftNode = _rgbShiftNode

export type RGBShiftNodeProps = Node<RGBShiftNode, typeof RGBShiftNode, { textureNode: TextureNode, amount?: number, angle?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rgbShiftNode: Partial<{ textureNode: TextureNode, amount?: number, angle?: number }>
    }
}

defaults.rgbShiftNode = {}
