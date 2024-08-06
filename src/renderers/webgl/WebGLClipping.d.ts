import { Node } from '../../../three-types';
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js';
import { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping.js';
export { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLClipping: typeof WebGLClipping;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglClipping: WebGLClippingProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglClipping: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglClipping: string[];
    }
}
export type WebGLClippingProps = Node<WebGLClipping, typeof WebGLClipping, {
    properties: WebGLProperties;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLClipping: Partial<{
            properties: WebGLProperties;
        }>;
    }
}
//# sourceMappingURL=WebGLClipping.d.ts.map