import { Node } from '../../three-types';
import { WebGL3DRenderTarget } from 'three/src/renderers/WebGL3DRenderTarget.js';
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js';
export { WebGL3DRenderTarget } from 'three/src/renderers/WebGL3DRenderTarget.js';
declare module '../../lib/3/three' {
    interface Three {
        WebGL3DRenderTarget: typeof WebGL3DRenderTarget;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webgl3dRenderTarget: WebGL3DRenderTargetProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        webgl3dRenderTarget: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        webgl3dRenderTarget: string[];
    }
}
export type WebGL3DRenderTargetProps = Node<WebGL3DRenderTarget, typeof WebGL3DRenderTarget, {
    width?: number;
    height?: number;
    depth?: number;
    options?: RenderTargetOptions;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        webgl3DRenderTarget: {
            width?: number;
            height?: number;
            depth?: number;
            options?: RenderTargetOptions;
        };
    }
}
//# sourceMappingURL=WebGL3DRenderTarget.d.ts.map