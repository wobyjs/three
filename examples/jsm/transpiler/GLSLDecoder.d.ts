import { Node } from '../../../three-types';
import GLSLDecoder from 'three/examples/jsm/transpiler/GLSLDecoder.js';
export * from 'three/examples/jsm/transpiler/GLSLDecoder.js';
declare module '../../../lib/3/three' {
    interface Three {
        GLSLDecoder: typeof GLSLDecoder;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            glslDecoder: GLSLDecoderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        glslDecoder: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        glslDecoder: string[];
    }
}
export type GLSLDecoderProps = Node<GLSLDecoder, typeof GLSLDecoder, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        glslDecoder: {};
    }
}
//# sourceMappingURL=GLSLDecoder.d.ts.map