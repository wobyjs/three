import { Node } from '../../../three-types';
import { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js';
export { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLObjects: typeof WebGLObjects;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglObjects: WebGLObjectsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglObjects: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglObjects: string[];
    }
}
export type WebGLObjectsProps = Node<WebGLObjects, typeof WebGLObjects, {
    gl: WebGLRenderingContext;
    geometries: any;
    attributes: any;
    info: any;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLObjects: Partial<{
            gl: WebGLRenderingContext;
            geometries: any;
            attributes: any;
            info: any;
        }>;
    }
}
//# sourceMappingURL=WebGLObjects.d.ts.map