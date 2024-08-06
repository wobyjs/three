import { Node } from '../../../three-types';
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js';
export { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLProperties: typeof WebGLProperties;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglProperties: WebGLPropertiesProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglProperties: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglProperties: string[];
    }
}
export type WebGLPropertiesProps = Node<WebGLProperties, typeof WebGLProperties, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLProperties: {};
    }
}
//# sourceMappingURL=WebGLProperties.d.ts.map