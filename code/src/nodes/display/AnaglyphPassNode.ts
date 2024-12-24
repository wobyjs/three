import { Node } from '../../../three-types'
import AnaglyphPassNode from 'three/src/nodes/display/AnaglyphPassNode.js'
export { AnaglyphPassNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './StereoCompositePassNode'
import { Scene } from '../../scenes/Scene'
import { Camera } from '../../cameras/Camera'

declare module '../../../lib/3/three'
{
    interface Three {
        AnaglyphPassNode: typeof AnaglyphPassNode
    }
}

Three.AnaglyphPassNode = AnaglyphPassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            anaglyphPassNode: AnaglyphPassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        anaglyphPassNode: typeof anaglyphPassNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        anaglyphPassNode: typeof _anaglyphPassNode
    }
}


const anaglyphPassNode = ([
    'scene',
    'camera',
] as const).distinct()
consParams.anaglyphPassNode = anaglyphPassNode



const _anaglyphPassNode = ([...objProps.stereoCompositePassNode,
    'isAnaglyphPassNode',
] as const).distinct()
objProps.anaglyphPassNode = _anaglyphPassNode

export type AnaglyphPassNodeProps = Node<AnaglyphPassNode, typeof AnaglyphPassNode, { scene: Scene, camera: Camera }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        anaglyphPassNode: Partial<{ scene: Scene, camera: Camera }>
    }
}

defaults.anaglyphPassNode = {}

