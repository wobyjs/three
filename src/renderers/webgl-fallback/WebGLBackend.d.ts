import { Node, WrapAsString } from '../../../three-types';
import { BackendParameters } from 'three/src/renderers/common/Backend.js';
import WebGLBackend, { WebGLBackendParameters } from 'three/src/renderers/webgl-fallback/WebGLBackend.js';
export { WebGLBackend };
import '../../../lib/three/extensions';
import '../common/Backend';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLBackend: typeof WebGLBackend;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglBackend: WebGLBackendProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglBackend: WrapAsString<WebGLBackendParameters>;
        webglBackendParameters: WrapAsString<WebGLBackendParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglBackend: string[];
        webglBackendParameters: string[];
    }
}
export type WebGLBackendProps = Node<WebGLBackend, typeof WebGLBackend, BackendParameters>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webglBackend: BackendParameters;
    }
}
//# sourceMappingURL=WebGLBackend.d.ts.map