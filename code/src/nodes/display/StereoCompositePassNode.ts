import { Node } from '../../../three-types'
import StereoCompositePassNode from 'three/src/nodes/display/StereoCompositePassNode.js'
export * from 'three/src/constants.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './PassNode'
import { Scene } from '../../scenes/Scene'
import { Camera } from '../../cameras/Camera'

declare module '../../../lib/3/three'
{
    interface Three {
        StereoCompositePassNode: typeof StereoCompositePassNode
    }
}

Three.StereoCompositePassNode = StereoCompositePassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stereoCompositePassNode: StereoCompositePassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stereoCompositePassNode: typeof stereoCompositePassNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        stereoCompositePassNode: typeof _stereoCompositePassNode
    }
}


// exposure only

const stereoCompositePassNode = ([
    'toneMapping',
    'exposureNode',
    'colorNode',
] as const).distinct()
consParams.stereoCompositePassNode = stereoCompositePassNode


// exposure only    

const _stereoCompositePassNode = ([...objProps.passNode,
    'isStereoCompositePassNode',
    'stereo',
] as const).distinct()
objProps.stereoCompositePassNode = _stereoCompositePassNode

export type StereoCompositePassNodeProps = Node<StereoCompositePassNode, typeof StereoCompositePassNode, { scene: Scene, camera: Camera }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stereoCompositePassNode: Partial<{ scene: Scene, camera: Camera }>
    }
}

defaults.stereoCompositePassNode = {}

