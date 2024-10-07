import { Node } from '../../../three-types'
import ParallaxBarrierPassNode from 'three/src/nodes/display/ParallaxBarrierPassNode.js'
export { ParallaxBarrierPassNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Scene } from '../../scenes/Scene'
import { Camera } from '../../cameras/Camera'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        ParallaxBarrierPassNode: typeof ParallaxBarrierPassNode
    }
}

Three.ParallaxBarrierPassNode = ParallaxBarrierPassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parallaxBarrierPassNode: ParallaxBarrierPassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        parallaxBarrierPassNode: typeof parallaxBarrierPassNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        parallaxBarrierPassNode: typeof _parallaxBarrierPassNode
    }
}


const parallaxBarrierPassNode = ([
    'scene',
    'camera',
] as const).distinct()
consParams.parallaxBarrierPassNode = parallaxBarrierPassNode


const _parallaxBarrierPassNode = ([...objProps.tempNode,
    'isParallaxBarrierPassNode',
] as const).distinct()
objProps.parallaxBarrierPassNode = _parallaxBarrierPassNode

export type ParallaxBarrierPassNodeProps = Node<ParallaxBarrierPassNode, typeof ParallaxBarrierPassNode, { scene: Scene, camera: Camera }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        parallaxBarrierPassNode: Partial<{ scene: Scene, camera: Camera }>
    }
}

defaults.parallaxBarrierPassNode = {}


