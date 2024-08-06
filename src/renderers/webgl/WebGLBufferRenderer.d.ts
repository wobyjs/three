import { Node } from '../../../three-types';
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js';
import { WebGLBufferRenderer } from 'three/src/renderers/webgl/WebGLBufferRenderer.js';
export { WebGLBufferRenderer } from 'three/src/renderers/webgl/WebGLBufferRenderer.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLBufferRenderer: typeof WebGLBufferRenderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglBufferRenderer: WebGLBufferRendererProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglBufferRenderer: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglBufferRenderer: string[];
    }
}
export type WebGLBufferRendererProps = Node<WebGLBufferRenderer, typeof WebGLBufferRenderer, {
    gl: WebGLRenderingContext;
    extensions: WebGLExtensions;
    info: WebGLInfo;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLBufferRenderer: Partial<{
            gl: WebGLRenderingContext;
            extensions: WebGLExtensions;
            info: WebGLInfo;
        }>;
    }
}
//# sourceMappingURL=WebGLBufferRenderer.d.ts.map