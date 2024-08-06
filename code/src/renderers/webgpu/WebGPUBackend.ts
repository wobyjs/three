import { Node, WrapAsString } from '../../../three-types'
import WebGPUBackend, { WebGPUBackendParameters } from 'three/src/renderers/webgpu/WebGPUBackend.js'
export { WebGPUBackend }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import '../../examples/jsm/renderers/common/Backend'
import { BackendParameters } from 'three/src/renderers/common/Backend'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGPUBackend: typeof WebGPUBackend
    }
}

Three.WebGPUBackend = WebGPUBackend

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webGpuBackend: WebGPUBackendProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webGpuBackend: WrapAsString<WebGPUBackendParameters>
        backendParameters: WrapAsString<BackendParameters>
        webGpuBackendParameters: WrapAsString<WebGPUBackendParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webGpuBackend: string[]
        backendParameters: string[]
        webGpuBackendParameters: string[]
    }
}

consParams.backendParameters = (['canvas'] as const).toObject()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuBackend.d.ts

consParams.webGpuBackendParameters = {
    ...consParams.backendParameters,
    ...(['alpha',
        'antialias',
        'sampleCount',
        'trackTimestamp',
    ] as const).toObject()
}


consParams.webGpuBackend = { ...consParams.webGpuBackendParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuBackend.d.ts    

objParams.webGpuBackendParameters = [...objParams.backendParameters,
    'alpha',
    'antialias',
    'sampleCount',
    'trackTimestamp',
].distinct()


objParams.webGpuBackend = [...objParams.backend,
].distinct()

export type WebGPUBackendProps = Node<WebGPUBackend, typeof WebGPUBackend, WebGPUBackendParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGpuBackend: WebGPUBackendParameters
    }
}

defaults.webGpuBackend = {}

