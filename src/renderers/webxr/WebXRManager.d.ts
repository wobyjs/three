import { Object3DNode } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { WebXRManager } from 'three/src/renderers/webxr/WebXRManager.js';
export { WebXRManager } from 'three/src/renderers/webxr/WebXRManager.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebXRManager: typeof WebXRManager;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webxrManager: WebXRManagerProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webxrManager: string[];
        webXrManagerEventMap: string[];
        webXrManager: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webxrManager: string[];
        webXrManagerEventMap: string[];
        webXrManager: string[];
    }
}
export type WebXRManagerProps = Object3DNode<WebXRManager, typeof WebXRManager, {
    renderer: WebGLRenderer;
    gl: WebGLRenderingContext;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRManager: Partial<{
            renderer: WebGLRenderer;
            gl: WebGLRenderingContext;
        }>;
    }
}
//# sourceMappingURL=WebXRManager.d.ts.map