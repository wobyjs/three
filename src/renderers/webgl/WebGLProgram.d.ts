import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLProgram: typeof WebGLProgram;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglProgram: WebGLProgramProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglProgram: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglProgram: string[];
    }
}
export type WebGLProgramProps = Node<WebGLProgram, typeof WebGLProgram, {
    renderer: WebGLRenderer;
    cacheKey: string;
    parameters: object;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLProgram: Partial<{
            renderer: WebGLRenderer;
            cacheKey: string;
            parameters: object;
        }>;
    }
}
//# sourceMappingURL=WebGLProgram.d.ts.map