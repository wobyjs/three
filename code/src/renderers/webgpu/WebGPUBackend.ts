import { Node, WrapAsString } from '../../../three-types'
import WebGPUBackend, { WebGPUBackendParameters } from 'three/src/renderers/webgpu/WebGPUBackend.js'
export { WebGPUBackend }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import '../common/Backend'
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

declare module '../../../lib/3/objProps' {
    interface objProps {
        webGpuBackend: typeof _webGpuBackend
        backendParameters: typeof _backendParameters
        webGpuBackendParameters: typeof _webGpuBackendParameters
    }
}

consParams.backendParameters = (['canvas'] as const).toObject()


consParams.webGpuBackendParameters = {
    ...consParams.backendParameters,
    ...(['alpha',
        'antialias',
        'sampleCount',
        'trackTimestamp',
    ] as const).toObject()
}


consParams.webGpuBackend = { ...consParams.webGpuBackendParameters }



const _webGpuBackendParameters = ([...objProps.backendParameters,
    'alpha',
    'antialias',
    'sampleCount',
    'trackTimestamp',
] as const).distinct()
objProps.webGpuBackendParameters = _webGpuBackendParameters


const _webGpuBackend = ([...objProps.backend,
] as const).distinct()
objProps.webGpuBackend = _webGpuBackend

const _backendParameters = ([
    'canvas',
] as const).distinct()
objProps.backendParameters = _backendParameters

export type WebGPUBackendProps = Node<WebGPUBackend, typeof WebGPUBackend, WebGPUBackendParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGpuBackend: WebGPUBackendParameters
    }
}

defaults.webGpuBackend = {}

