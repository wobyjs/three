import { Node, WrapAsString } from '../../../three-types'
import WebGPURenderer, { WebGPURendererParameters } from 'three/src/renderers/webgpu/WebGPURenderer.js'
export { WebGPURenderer }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import '../../code/examples/jsm/renderers/common/Renderer'
import './WebGPUBackend'
import { RendererEx } from '../RendererEx'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGPURenderer: typeof WebGPURenderer
    }
}

Three.WebGPURenderer = WebGPURenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webGpuRenderer: WebGPURendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webGpuRenderer: WrapAsString<WebGPURendererParameters>
        webGpuRendererParameters: WrapAsString<WebGPURendererParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webGpuRenderer: typeof _webGpuRenderer
        webGpuRendererParameters: typeof _webGpuRendererParameters
    }
}



consParams.webGpuRendererParameters = {
    ...consParams.rendererParameters, ...consParams.webGpuBackendParameters,
    ...(['forceWebGl',] as const).toObject()
}

consParams.webGpuRenderer = { ...consParams.webGpuRendererParameters }



const _webGpuRendererParameters = ([...objProps.rendererParameters, ...objProps.webGpuBackendParameters,
    'forceWebGl',
] as const).distinct()
objProps.webGpuRendererParameters = _webGpuRendererParameters

const _webGpuRenderer = ([...objProps.renderer,
] as const).distinct()
objProps.webGpuRenderer = _webGpuRenderer

export type WebGPURendererProps = Node<WebGPURenderer, typeof WebGPURenderer, WebGPURendererParameters & RendererEx>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGpuRenderer: WebGPURendererParameters & RendererEx
    }
}

defaults.webGpuRenderer = {}

