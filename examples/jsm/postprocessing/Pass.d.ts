import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
export * from 'three/examples/jsm/postprocessing/Pass.js';
declare module '../../../lib/3/three' {
    interface Three {
        Pass: typeof Pass;
        FullScreenQuad: typeof FullScreenQuad;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pass: PassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pass: string[];
        fullScreenQuad: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pass: string[];
        fullScreenQuad: string[];
    }
}
export type PassProps = Node<Pass, typeof Pass, {
    renderer: WebGLRenderer;
    writeBuffer: WebGLRenderTarget;
    readBuffer: WebGLRenderTarget;
    deltaTime: number;
    maskActive: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pass: Partial<{
            renderer: WebGLRenderer;
            writeBuffer: WebGLRenderTarget;
            readBuffer: WebGLRenderTarget;
            deltaTime: number;
            maskActive: boolean;
        }>;
    }
}
export type FullScreenQuadProps = Node<FullScreenQuad, typeof FullScreenQuad, {
    renderer: WebGLRenderer;
    writeBuffer: WebGLRenderTarget;
    readBuffer: WebGLRenderTarget;
    deltaTime: number;
    maskActive: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        fullScreenQuad: Partial<{
            renderer: WebGLRenderer;
            writeBuffer: WebGLRenderTarget;
            readBuffer: WebGLRenderTarget;
            deltaTime: number;
            maskActive: boolean;
        }>;
    }
}
//# sourceMappingURL=Pass.d.ts.map