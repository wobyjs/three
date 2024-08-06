import { Node } from '../../../three-types';
import { WebGLIndexedBufferRenderer } from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer.js';
export { WebGLIndexedBufferRenderer } from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLIndexedBufferRenderer: typeof WebGLIndexedBufferRenderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglIndexedBufferRenderer: WebGLIndexedBufferRendererProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglIndexedBufferRenderer: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglIndexedBufferRenderer: string[];
    }
}
export type WebGLIndexedBufferRendererProps = Node<WebGLIndexedBufferRenderer, typeof WebGLIndexedBufferRenderer, {
    gl: WebGLRenderingContext;
    extensions: any;
    info: any;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLIndexedBufferRenderer: Partial<{
            gl: WebGLRenderingContext;
            extensions: any;
            info: any;
        }>;
    }
}
//# sourceMappingURL=WebGLIndexedBufferRenderer.d.ts.map