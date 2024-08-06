import { Node } from '../../../three-types';
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js';
export { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLUtils: typeof WebGLUtils;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglUtils: WebGLUtilsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglUtils: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglUtils: string[];
    }
}
export type WebGLUtilsProps = Node<WebGLUtils, typeof WebGLUtils, {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    extensions: WebGLExtensions;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLUtils: Partial<{
            gl: WebGLRenderingContext | WebGL2RenderingContext;
            extensions: WebGLExtensions;
        }>;
    }
}
//# sourceMappingURL=WebGLUtils.d.ts.map