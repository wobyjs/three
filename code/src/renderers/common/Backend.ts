import { Node, WrapAsString } from '../../../three-types'
import Backend, { BackendParameters } from 'three/src/renderers/common/Backend.js'
export { Backend }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        Backend: typeof Backend
    }
}

Three.Backend = Backend

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            backend: BackendProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        backend: WrapAsString<BackendParameters>
        backendParameters: WrapAsString<BackendParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        backend: typeof _backend
        backendParameters: typeof _backendParameters
    }
}



consParams.backendParameters = ([
    'canvas',
] as const).toObject()


consParams.backend = { ...consParams.backendParameters }



const _backendParameters = ([
    'canvas',
] as const).distinct()
objProps.backendParameters = _backendParameters

const _backend = ([
    'renderer',
    'domElement',
] as const).distinct()
objProps.backend = _backend

export type BackendProps = Node<Backend, typeof Backend, BackendParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        backend: BackendParameters
    }
}

defaults.backend = {}

