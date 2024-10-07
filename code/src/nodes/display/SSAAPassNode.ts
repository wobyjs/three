import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import SSAAPassNode from 'three/src/nodes/display/SSAAPassNode.js'
export { SSAAPassNode }
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
        SSAAPassNode: typeof SSAAPassNode
    }
}

Three.SSAAPassNode = SSAAPassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ssaaPassNode: SSAAPassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ssaaPassNode: typeof ssaaPassNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ssaaPassNode: typeof _ssaaPassNode
    }
}


const ssaaPassNode = ([
    'textureNode',
] as const).distinct()
consParams.ssaaPassNode = ssaaPassNode

const _ssaaPassNode = ([...objProps.passNode,
    'isSSAAPassNode',
    'sampleLevel',
    'unbiased',
    'clearColor',
    'clearAlpha',
    'sampleWeight',
    'sampleRenderTarget',
] as const).distinct()
objProps.ssaaPassNode = _ssaaPassNode

export type SSAAPassNodeProps = Node<SSAAPassNode, typeof SSAAPassNode, { scene: Scene, camera: Camera }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ssaaPassNode: Partial<{ scene: Scene, camera: Camera }>
    }
}

defaults.ssaaPassNode = {}

