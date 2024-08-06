import { Node } from '../../../three-types'
import { Group } from 'three/src/objects/Group.js'
import { XRHandModel, XRHandModelHandedness } from 'three/examples/jsm/webxr/XRHandModelFactory.js'
import { XRHandPrimitiveModel, XRHandPrimitiveModelOptions } from 'three/examples/jsm/webxr/XRHandPrimitiveModel.js'
export * from 'three/examples/jsm/webxr/XRHandPrimitiveModel.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XRHandPrimitiveModel: typeof XRHandPrimitiveModel
    }
}

Three.XRHandPrimitiveModel = XRHandPrimitiveModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrHandPrimitiveModel: XRHandPrimitiveModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrHandPrimitiveModel: string[]
        xrHandPrimitiveModelOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        xrHandPrimitiveModel: string[]
        xrHandPrimitiveModelOptions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandPrimitiveModel.d.ts

consParams.xrHandPrimitiveModelOptions = [
    'primitive',
].distinct()

consParams.xrHandPrimitiveModel = [
    'handModel',
    'controller',
    'path',
    'handedness',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandPrimitiveModel.d.ts

objParams.xrHandPrimitiveModelOptions = [
    'primitive',
].distinct()

objParams.xrHandPrimitiveModel = [
    'controller',
    'handModel',
    'envMap',
    'handMesh',
    'updateMesh',
].distinct()

export type XRHandPrimitiveModelProps = Node<XRHandPrimitiveModel, typeof XRHandPrimitiveModel, { handModel: XRHandModel; controller: Group; path: string; handedness: XRHandModelHandedness; options: XRHandPrimitiveModelOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrHandPrimitiveModel: Partial<{ handModel: XRHandModel; controller: Group; path: string; handedness: XRHandModelHandedness; options: XRHandPrimitiveModelOptions; }>
    }
}

defaults.xrHandPrimitiveModel = {}

