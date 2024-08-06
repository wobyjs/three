import { Node, WrapAsString } from '../../../three-types'
import WebGPURenderer, { WebGPURendererParameters } from 'three/src/renderers/webgpu/WebGPURenderer.js'
export { WebGPURenderer }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import '../../code/examples/jsm/renderers/common/Renderer'
import './WebGPUBackend'

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

declare module '../../../lib/3/objParams' {
    interface objParams {
        webGpuRenderer: string[]
        webGpuRendererParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuRenderer.d.ts

consParams.webGpuRendererParameters = {
    ...consParams.rendererParameters, ...consParams.webGpuBackendParameters,
    ...(['forceWebGl',] as const).toObject()
}

consParams.webGpuRenderer = { ...consParams.webGpuRendererParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuRenderer.d.ts    

objParams.webGpuRendererParameters = [...objParams.rendererParameters, ...objParams.webGpuBackendParameters,
    'forceWebGl',
].distinct()

objParams.webGpuRenderer = [...objParams.renderer,
].distinct()

export type WebGPURendererProps = Node<WebGPURenderer, typeof WebGPURenderer, WebGPURendererParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGpuRenderer: WebGPURendererParameters
    }
}

defaults.webGpuRenderer = {}

