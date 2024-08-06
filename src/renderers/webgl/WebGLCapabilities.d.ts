import { Node, WrapAsString } from '../../../three-types';
import { WebGLCapabilities, WebGLCapabilitiesParameters } from 'three/src/renderers/webgl/WebGLCapabilities.js';
export { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLCapabilities: typeof WebGLCapabilities;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCapabilities: WebGLCapabilitiesProps;
            webglCapabilitiesParameters: WrapAsString<WebGLCapabilitiesParameters>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglCapabilities: string[];
        webglCapabilitiesParameters: WrapAsString<WebGLCapabilitiesParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglCapabilities: string[];
        webglCapabilitiesParameters: string[];
    }
}
export type WebGLCapabilitiesProps = Node<WebGLCapabilities, typeof WebGLCapabilities, {
    gl: WebGLRenderingContext;
    extensions: any;
    parameters: WebGLCapabilitiesParameters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCapabilities: Partial<{
            gl: WebGLRenderingContext;
            extensions: any;
            parameters: WebGLCapabilitiesParameters;
        }>;
    }
}
//# sourceMappingURL=WebGLCapabilities.d.ts.map