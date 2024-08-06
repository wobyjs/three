import { Node, WrapAsString } from '../../three-types';
import { WebGLRenderer, WebGLRendererParameters } from 'three/src/renderers/WebGLRenderer.js';
export * from 'three/src/renderers/WebGLRenderer.js';
import './common/Renderer';
declare module '../../lib/3/three' {
    interface Three {
        WebGLRenderer: typeof WebGLRenderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglRenderer: WebGLRendererProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        webglDebug: string[];
        webglRenderer: WrapAsString<WebGLRendererParameters>;
        webglRendererParameters: WrapAsString<WebGLRendererParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        webglRenderer: string[];
        webglRendererParameters: string[];
        webglDebug: string[];
    }
}
export type WebGLRendererProps = Node<WebGLRenderer, typeof WebGLRenderer, WebGLRendererParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        webglRenderer: WebGLRendererParameters;
    }
}
//# sourceMappingURL=WebGLRenderer.d.ts.map