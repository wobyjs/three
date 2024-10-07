import { Node } from '../../../three-types'
import { Node as ENode, UniformNode } from 'three/src/nodes/Nodes.js'
import Lut3DNode from 'three/src/nodes/display/Lut3DNode.js'
export { Lut3DNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Data3DTexture } from '../../textures/Data3DTexture'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        Lut3DNode: typeof Lut3DNode
    }
}

Three.Lut3DNode = Lut3DNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lut3dNode: Lut3DNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lut3dNode: typeof lut3dNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lut3dNode: typeof _lut3dNode
    }
}


const lut3dNode = ([
    'inputNode',
    'lutNode',
    'size',
    'intensityNode',
] as const).distinct()
consParams.lut3dNode = lut3dNode



const _lut3dNode = ([...objProps.tempNode,
    'inputNode',
    'lutNode',
    'size',
    'intensityNode',
] as const).distinct()
objProps.lut3dNode = _lut3dNode

export type Lut3DNodeProps = Node<Lut3DNode, typeof Lut3DNode, { inputNode: ENode, lutNode: UniformNode<Data3DTexture>, size: number, intensityNode: UniformNode<number> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lut3dNode: Partial<{ inputNode: ENode, lutNode: UniformNode<Data3DTexture>, size: number, intensityNode: UniformNode<number> }>
    }
}

defaults.lut3dNode = {}

