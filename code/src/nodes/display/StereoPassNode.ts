import { Node } from '../../../three-types'
import StereoPassNode from 'three/src/nodes/display/StereoPassNode.js'
export { StereoPassNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './PassNode'
import { Scene } from 'code/src/scenes/Scene'
import { Camera } from 'code/src/cameras/Camera'

declare module '../../../lib/3/three'
{
    interface Three {
        StereoPassNode: typeof StereoPassNode
    }
}

Three.StereoPassNode = StereoPassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stereoPassNode: StereoPassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stereoPassNode: typeof stereoPassNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        stereoPassNode: typeof _stereoPassNode
    }
}


const stereoPassNode = ([
    'textureNode',
] as const).distinct()
consParams.stereoPassNode = stereoPassNode

const _stereoPassNode = ([...objProps.passNode,
    'isStereoPassNode',
    'stereo',
] as const).distinct()
objProps.stereoPassNode = _stereoPassNode

export type StereoPassNodeProps = Node<StereoPassNode, typeof StereoPassNode, { scene: Scene, camera: Camera }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stereoPassNode: Partial<{ scene: Scene, camera: Camera }>
    }
}

defaults.stereoPassNode = {}
