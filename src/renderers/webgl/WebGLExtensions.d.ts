import { Node } from '../../../three-types';
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
export { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLExtensions: typeof WebGLExtensions;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglExtensions: WebGLExtensionsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglExtensions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglExtensions: string[];
    }
}
export type WebGLExtensionsProps = Node<WebGLExtensions, typeof WebGLExtensions, {
    gl: WebGLRenderingContext;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLExtensions: Partial<{
            gl: WebGLRenderingContext;
        }>;
    }
}
//# sourceMappingURL=WebGLExtensions.d.ts.map