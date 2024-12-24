import { Node } from '../../../three-types'
import PixelationPassNode from 'three/src/nodes/display/PixelationPassNode.js'
export { PixelationPassNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Scene } from '../../scenes/Scene'
import { Camera } from '../../cameras/Camera'
import './PassNode'

declare module '../../../lib/3/three'
{
    interface Three {
        PixelationPassNode: typeof PixelationPassNode
    }
}

Three.PixelationPassNode = PixelationPassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pixelationPassNode: PixelationPassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pixelationPassNode: typeof pixelationPassNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pixelationPassNode: typeof _pixelationPassNode
    }
}


const pixelationPassNode = ([
    'scene',
    'camera',
    'pixelSize',
    'normalEdgeStrength',
    'depthEdgeStrength',
] as const).distinct()
consParams.pixelationPassNode = pixelationPassNode


const _pixelationPassNode = ([...objProps.passNode,
    'pixelSize',
    'normalEdgeStrength',
    'depthEdgeStrength',
    'isPixelationPassNode',
] as const).distinct()
objProps.pixelationPassNode = _pixelationPassNode

export type PixelationPassNodeProps = Node<PixelationPassNode, typeof PixelationPassNode, { scene: Scene, camera: Camera, pixelSize: number, normalEdgeStrength: number, depthEdgeStrength: number, }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pixelationPassNode: Partial<{ scene: Scene, camera: Camera, pixelSize: number, normalEdgeStrength: number, depthEdgeStrength: number, }>
    }
}

defaults.pixelationPassNode = {}

