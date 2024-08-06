import { Node } from '../../../three-types';
import { WebGLState } from 'three/src/renderers/webgl/WebGLState.js';
export { WebGLState } from 'three/src/renderers/webgl/WebGLState.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLState: typeof WebGLState;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglState: WebGLStateProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglState: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglState: string[];
    }
}
export type WebGLStateProps = Node<WebGLState, typeof WebGLState, {
    gl: WebGLRenderingContext;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLState: Partial<{
            gl: WebGLRenderingContext;
        }>;
    }
}
//# sourceMappingURL=WebGLState.d.ts.map