import { Node, WrapAsString } from '../../../three-types'
import { BackendParameters } from 'three/src/renderers/common/Backend.js'
import WebGLBackend, { WebGLBackendParameters } from 'three/src/renderers/webgl-fallback/WebGLBackend.js'
export { WebGLBackend }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglBackend: string[]
        webglBackendParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\WebGlBackend.d.ts

consParams.webglBackendParameters = {
    ...consParams.backendParameters,
    ...(['trackTimestamp',
    ] as const).toObject()
}


consParams.webglBackend = { ...consParams.backendParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\WebGlBackend.d.ts    

objParams.webglBackendParameters = [...objParams.backendParameters,
    'trackTimestamp',
].distinct()


objParams.webglBackend = [...objParams.backend,
].distinct()

export type WebGLBackendProps = Node<WebGLBackend, typeof WebGLBackend, BackendParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webglBackend: BackendParameters
    }
}

defaults.webglBackend = {}

