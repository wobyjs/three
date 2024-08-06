import { Node } from '../../three-types';
import { WebGLArrayRenderTarget } from 'three/src/renderers/WebGLArrayRenderTarget.js';
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js';
export { WebGLArrayRenderTarget } from 'three/src/renderers/WebGLArrayRenderTarget.js';
import './WebGLRenderTarget';
declare module '../../lib/3/three' {
    interface Three {
        WebGLArrayRenderTarget: typeof WebGLArrayRenderTarget;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglArrayRenderTarget: WebGLArrayRenderTargetProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        webglArrayRenderTarget: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        webglArrayRenderTarget: string[];
    }
}
export type WebGLArrayRenderTargetProps = Node<WebGLArrayRenderTarget, typeof WebGLArrayRenderTarget, {
    width?: number;
    height?: number;
    depth?: number;
    options?: RenderTargetOptions;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        webglArrayRenderTarget: {
            width?: number;
            height?: number;
            depth?: number;
            options?: RenderTargetOptions;
        };
    }
}
//# sourceMappingURL=WebGLArrayRenderTarget.d.ts.map