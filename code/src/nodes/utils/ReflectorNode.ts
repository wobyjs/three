import { Node, WrapAsString } from '../../../three-types'
import ReflectorNode, { ReflectorNodeParameters } from 'three/src/nodes/utils/ReflectorNode.js'
export { ReflectorNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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

declare module '../../../lib/3/objParams' {
    interface objParams {
        reflectorNode: string[]
        reflectorNodeParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ReflectorNode.d.ts

consParams.reflectorNodeParameters = ([
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
] as const).toObject()


consParams.reflectorNode = { ...consParams.reflectorNodeParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ReflectorNode.d.ts

objParams.reflectorNodeParameters = [
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
].distinct()


objParams.reflectorNode = [...objParams.textureNode,
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
    'virtualCameras',
    'renderTargets',
].distinct()

export type ReflectorNodeProps = Node<ReflectorNode, typeof ReflectorNode, ReflectorNodeParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        reflectorNode: ReflectorNodeParameters
    }
}

defaults.reflectorNode = {}

