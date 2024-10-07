import { Node, WrapAsString } from '../../../three-types'
import ReflectorNode, { ReflectorNodeParameters } from 'three/src/nodes/utils/ReflectorNode.js'
export { ReflectorNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../lib/three/extensions'
import '../accessors/TextureNode'

declare module '../../../lib/3/three'
{
    interface Three {
        ReflectorNode: typeof ReflectorNode
    }
}

Three.ReflectorNode = ReflectorNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            reflectorNode: ReflectorNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        reflectorNode: WrapAsString<ReflectorNodeParameters>
        reflectorNodeParameters: WrapAsString<ReflectorNodeParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        reflectorNode: typeof _reflectorNode
        reflectorNodeParameters: typeof _reflectorNodeParameters
    }
}



consParams.reflectorNodeParameters = ([
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
] as const).toObject()


consParams.reflectorNode = { ...consParams.reflectorNodeParameters }



const _reflectorNodeParameters = ([
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
] as const).distinct()
objProps.reflectorNodeParameters = _reflectorNodeParameters


const _reflectorNode = ([...objProps.textureNode,
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
    'virtualCameras',
    'renderTargets',
] as const).distinct()
objProps.reflectorNode = _reflectorNode

export type ReflectorNodeProps = Node<ReflectorNode, typeof ReflectorNode, ReflectorNodeParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        reflectorNode: ReflectorNodeParameters
    }
}

defaults.reflectorNode = {}

