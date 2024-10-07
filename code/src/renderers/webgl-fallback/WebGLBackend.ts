import { Node, WrapAsString } from '../../../three-types'
import { BackendParameters } from 'three/src/renderers/common/Backend.js'
import WebGLBackend, { WebGLBackendParameters } from 'three/src/renderers/webgl-fallback/WebGLBackend.js'
export { WebGLBackend }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import '../common/Backend'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLBackend: typeof WebGLBackend
    }
}

Three.WebGLBackend = WebGLBackend

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglBackend: WebGLBackendProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglBackend: WrapAsString<WebGLBackendParameters>
        webglBackendParameters: WrapAsString<WebGLBackendParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglBackend: typeof _webglBackend
        webglBackendParameters: typeof _webglBackendParameters
    }
}



consParams.webglBackendParameters = {
    ...consParams.backendParameters,
    ...(['trackTimestamp',
    ] as const).toObject()
}


consParams.webglBackend = { ...consParams.backendParameters }



const _webglBackendParameters = ([...objProps.backendParameters,
    'trackTimestamp',
] as const).distinct()
objProps.webglBackendParameters = _webglBackendParameters


const _webglBackend = ([...objProps.backend,
] as const).distinct()
objProps.webglBackend = _webglBackend

export type WebGLBackendProps = Node<WebGLBackend, typeof WebGLBackend, BackendParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webglBackend: BackendParameters
    }
}

defaults.webglBackend = {}

