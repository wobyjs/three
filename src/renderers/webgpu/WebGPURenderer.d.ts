import { Node, WrapAsString } from '../../../three-types';
import WebGPURenderer, { WebGPURendererParameters } from 'three/src/renderers/webgpu/WebGPURenderer.js';
export { WebGPURenderer };
import '../../../lib/three/extensions';
import '../../code/examples/jsm/renderers/common/Renderer';
import './WebGPUBackend';
declare module '../../../lib/3/three' {
    interface Three {
        WebGPURenderer: typeof WebGPURenderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webGpuRenderer: WebGPURendererProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webGpuRenderer: WrapAsString<WebGPURendererParameters>;
        webGpuRendererParameters: WrapAsString<WebGPURendererParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webGpuRenderer: string[];
        webGpuRendererParameters: string[];
    }
}
export type WebGPURendererProps = Node<WebGPURenderer, typeof WebGPURenderer, WebGPURendererParameters>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGpuRenderer: WebGPURendererParameters;
    }
}
//# sourceMappingURL=WebGPURenderer.d.ts.map