import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js';
import { Node } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLInfo: typeof WebGLInfo;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglInfo: WebGLInfoProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglInfo: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglInfo: string[];
    }
}
export type WebGLInfoProps = Node<WebGLInfo, typeof WebGLInfo, {
    gl: WebGLRenderingContext;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLInfo: Partial<{
            gl: WebGLRenderingContext;
        }>;
    }
}
//# sourceMappingURL=WebGLInfo.d.ts.map