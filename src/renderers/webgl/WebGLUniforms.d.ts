import { Node } from '../../../three-types';
import { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms.js';
export { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLUniforms: typeof WebGLUniforms;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglUniforms: WebGLUniformsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglUniforms: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglUniforms: string[];
    }
}
export type WebGLUniformsProps = Node<WebGLUniforms, typeof WebGLUniforms, {
    gl: WebGLRenderingContext;
    program: WebGLProgram;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLUniforms: Partial<{
            gl: WebGLRenderingContext;
            program: WebGLProgram;
        }>;
    }
}
//# sourceMappingURL=WebGLUniforms.d.ts.map