import { Node } from '../../three-types';
import { GLBufferAttribute } from 'three/src/core/GLBufferAttribute.js';
export { GLBufferAttribute } from 'three/src/core/GLBufferAttribute.js';
declare module '../../lib/3/three' {
    interface Three {
        GLBufferAttribute: typeof GLBufferAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            glBufferAttribute: GLBufferAttributeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        glBufferAttribute: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        glBufferAttribute: string[];
    }
}
export type GLBufferAttributeProps = Node<GLBufferAttribute, typeof GLBufferAttribute, {
    buffer: WebGLBuffer;
    type: GLenum;
    itemSize: number;
    elementSize: 1 | 2 | 4;
    count: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        gLBufferAttribute: Partial<{
            buffer: WebGLBuffer;
            type: GLenum;
            itemSize: number;
            elementSize: 1 | 2 | 4;
            count: number;
        }>;
    }
}
//# sourceMappingURL=GLBufferAttribute.d.ts.map