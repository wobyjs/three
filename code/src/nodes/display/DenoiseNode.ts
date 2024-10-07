import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import DenoiseNode from 'three/src/nodes/display/DenoiseNode.js'
export { DenoiseNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'
import { Camera } from '../../cameras/Camera'

declare module '../../../lib/3/three'
{
    interface Three {
        DenoiseNode: typeof DenoiseNode
    }
}

Three.DenoiseNode = DenoiseNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            denoiseNode: DenoiseNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        denoiseNode: typeof denoiseNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        denoiseNode: typeof _denoiseNode
    }
}


const denoiseNode = ([
    'textureNode',
    'depthNode',
    'normalNode',
    'noiseNode',
    'camera',
] as const).distinct()
consParams.denoiseNode = denoiseNode



const _denoiseNode = ([...objProps.tempNode,
    'textureNode',
    'depthNode',
    'normalNode',
    'noiseNode',
    'cameraProjectionMatrixInversion',
    'lumaPhi',
    'depthPhi',
    'normalPhi',
    'radius',
    'index',
] as const).distinct()
objProps.denoiseNode = _denoiseNode

export type DenoiseNodeProps = Node<DenoiseNode, typeof DenoiseNode, { textureNode: ENode, depthNode: ENode, normalNode: ENode, noiseNode: ENode, camera: Camera }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        denoiseNode: Partial<{ textureNode: ENode, depthNode: ENode, normalNode: ENode, noiseNode: ENode, camera: Camera }>
    }
}

defaults.denoiseNode = {}
