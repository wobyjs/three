import { Node } from '../../three-types';
import { RenderTarget, RenderTargetOptions } from 'three/src/core/RenderTarget.js';
export { RenderTarget } from 'three/src/core/RenderTarget.js';
declare module '../../lib/3/three' {
    interface Three {
        RenderTarget: typeof RenderTarget;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderTarget: RenderTargetProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        renderTarget: string[];
        renderTargetOptions: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        renderTarget: string[];
        renderTargetOptions: string[];
    }
}
export type RenderTargetProps = Node<RenderTarget, typeof RenderTarget, {
    width?: number;
    height?: number;
    options?: RenderTargetOptions;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        renderTarget: Partial<{
            width?: number;
            height?: number;
            options?: RenderTargetOptions;
        }>;
    }
}
//# sourceMappingURL=RenderTarget.d.ts.map