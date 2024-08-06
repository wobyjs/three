import WebGL from 'three/examples/jsm/capabilities/WebGL.js';
export * from 'three/examples/jsm/capabilities/WebGL.js';
import { Node } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        WebGL: typeof WebGL;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webgl: WebGLProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webgl: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webgl: string[];
    }
}
export type WebGLProps = Node<WebGL, typeof WebGL, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGL: {};
    }
}
//# sourceMappingURL=WebGL.d.ts.map