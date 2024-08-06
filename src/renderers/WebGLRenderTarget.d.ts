import { Node } from '../../three-types';
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js';
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js';
export { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js';
declare module '../../lib/3/three' {
    interface Three {
        WebGLRenderTarget: typeof WebGLRenderTarget;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglRenderTarget: WebGLRenderTargetProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        webglRenderTarget: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        webglRenderTarget: string[];
    }
}
export type WebGLRenderTargetProps = Node<WebGLRenderTarget, typeof WebGLRenderTarget, {
    width?: number;
    height?: number;
    options?: RenderTargetOptions;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        webGLRenderTarget: {
            width?: number;
            height?: number;
            options?: RenderTargetOptions;
        };
    }
}
//# sourceMappingURL=WebGLRenderTarget.d.ts.map