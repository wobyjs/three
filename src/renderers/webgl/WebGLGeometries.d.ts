import { Node } from '../../../three-types';
import { WebGLAttributes } from 'three/src/renderers/webgl/WebGLAttributes.js';
import { WebGLGeometries } from 'three/src/renderers/webgl/WebGLGeometries.js';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js';
export { WebGLGeometries } from 'three/src/renderers/webgl/WebGLGeometries.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLGeometries: typeof WebGLGeometries;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglGeometries: WebGLGeometriesProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglGeometries: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglGeometries: string[];
    }
}
export type WebGLGeometriesProps = Node<WebGLGeometries, typeof WebGLGeometries, {
    gl: WebGLRenderingContext;
    attributes: WebGLAttributes;
    info: WebGLInfo;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLGeometries: Partial<{
            gl: WebGLRenderingContext;
            attributes: WebGLAttributes;
            info: WebGLInfo;
        }>;
    }
}
//# sourceMappingURL=WebGLGeometries.d.ts.map