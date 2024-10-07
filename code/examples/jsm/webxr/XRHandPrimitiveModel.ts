import { Node } from '../../../three-types'
import { Group } from 'three/src/objects/Group.js'
import { XRHandModel, XRHandModelHandedness } from 'three/examples/jsm/webxr/XRHandModelFactory.js'
import { XRHandPrimitiveModel, XRHandPrimitiveModelOptions } from 'three/examples/jsm/webxr/XRHandPrimitiveModel.js'
export * from 'three/examples/jsm/webxr/XRHandPrimitiveModel.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        xrHandPrimitiveModel: typeof xrHandPrimitiveModel
        xrHandPrimitiveModelOptions: typeof xrHandPrimitiveModelOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        xrHandPrimitiveModel: typeof _xrHandPrimitiveModel
        xrHandPrimitiveModelOptions: typeof _xrHandPrimitiveModelOptions
    }
}



const xrHandPrimitiveModelOptions = ([
    'primitive',
] as const).distinct()
consParams.xrHandPrimitiveModelOptions = xrHandPrimitiveModelOptions

const xrHandPrimitiveModel = ([
    'handModel',
    'controller',
    'path',
    'handedness',
    'options',
] as const).distinct()
consParams.xrHandPrimitiveModel = xrHandPrimitiveModel



const _xrHandPrimitiveModelOptions = ([
    'primitive',
] as const).distinct()
objProps.xrHandPrimitiveModelOptions = _xrHandPrimitiveModelOptions

const _xrHandPrimitiveModel = ([
    'controller',
    'handModel',
    'envMap',
    'handMesh',
    'updateMesh',
] as const).distinct()
objProps.xrHandPrimitiveModel = _xrHandPrimitiveModel

export type XRHandPrimitiveModelProps = Node<XRHandPrimitiveModel, typeof XRHandPrimitiveModel, { handModel: XRHandModel; controller: Group; path: string; handedness: XRHandModelHandedness; options: XRHandPrimitiveModelOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrHandPrimitiveModel: Partial<{ handModel: XRHandModel; controller: Group; path: string; handedness: XRHandModelHandedness; options: XRHandPrimitiveModelOptions; }>
    }
}

defaults.xrHandPrimitiveModel = {}

