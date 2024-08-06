import { Node, WrapAsString } from '../../../three-types';
import WebGPUBackend, { WebGPUBackendParameters } from 'three/src/renderers/webgpu/WebGPUBackend.js';
export { WebGPUBackend };
import '../../../lib/three/extensions';
import '../../examples/jsm/renderers/common/Backend';
import { BackendParameters } from 'three/src/renderers/common/Backend';
declare module '../../../lib/3/three' {
    interface Three {
        WebGPUBackend: typeof WebGPUBackend;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webGpuBackend: WebGPUBackendProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webGpuBackend: WrapAsString<WebGPUBackendParameters>;
        backendParameters: WrapAsString<BackendParameters>;
        webGpuBackendParameters: WrapAsString<WebGPUBackendParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webGpuBackend: string[];
        backendParameters: string[];
        webGpuBackendParameters: string[];
    }
}
export type WebGPUBackendProps = Node<WebGPUBackend, typeof WebGPUBackend, WebGPUBackendParameters>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGpuBackend: WebGPUBackendParameters;
    }
}
//# sourceMappingURL=WebGPUBackend.d.ts.map