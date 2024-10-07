import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import GTAONode from 'three/src/nodes/display/GTAONode.js'
export { GTAONode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'
import { Camera } from '../../cameras/Camera'

declare module '../../../lib/3/three'
{
    interface Three {
        GTAONode: typeof GTAONode
    }
}

Three.GTAONode = GTAONode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gtaoNode: GTAONodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gtaoNode: typeof gtaoNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gtaoNode: typeof _gtaoNode
    }
}


const gtaoNode = ([
    'depthNode',
    'normalNode',
    'camera',
] as const).distinct()
consParams.gtaoNode = gtaoNode

const _gtaoNode = ([...objProps.tempNode,
    'depthNode',
    'normalNode',
    'radius',
    'resolution',
    'thickness',
    'distanceExponent',
    'distanceFallOff',
    'scale',
    'noiseNode',
    'cameraProjectionMatrix',
    'cameraProjectionMatrixInverse',
    'SAMPLES',
] as const).distinct()
objProps.gtaoNode = _gtaoNode

export type GTAONodeProps = Node<GTAONode, typeof GTAONode, { depthNode: ENode, normalNode: ENode, camera: Camera }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gtaoNode: Partial<{ depthNode: ENode, normalNode: ENode, camera: Camera }>
    }
}

defaults.gtaoNode = {}


