import { Node } from '../../../three-types';
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
import { WebGLLights } from 'three/src/renderers/webgl/WebGLLights.js';
export { WebGLLights } from 'three/src/renderers/webgl/WebGLLights.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLLights: typeof WebGLLights;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglLights: WebGLLightsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglLights: string[];
        webglLightsState: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglLights: string[];
        webglLightsState: string[];
    }
}
export type WebGLLightsProps = Node<WebGLLights, typeof WebGLLights, {
    extensions: WebGLExtensions;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLLights: Partial<{
            extensions: WebGLExtensions;
        }>;
    }
}
//# sourceMappingURL=WebGLLights.d.ts.map