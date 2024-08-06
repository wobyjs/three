import { Node } from '../../three-types';
import { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js';
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js';
export { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js';
declare module '../../lib/3/three' {
    interface Three {
        WebGLCubeRenderTarget: typeof WebGLCubeRenderTarget;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCubeRenderTarget: WebGLCubeRenderTargetProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        webglCubeRenderTarget: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        webglCubeRenderTarget: string[];
    }
}
export type WebGLCubeRenderTargetProps = Node<WebGLCubeRenderTarget, typeof WebGLCubeRenderTarget, {
    size?: number;
    options?: RenderTargetOptions;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        webGLCubeRenderTarget: {
            size?: number;
            options?: RenderTargetOptions;
        };
    }
}
//# sourceMappingURL=WebGLCubeRenderTarget.d.ts.map