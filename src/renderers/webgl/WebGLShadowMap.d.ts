import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { WebGLShadowMap } from 'three/src/renderers/webgl/WebGLShadowMap.js';
import { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js';
export { WebGLShadowMap } from 'three/src/renderers/webgl/WebGLShadowMap.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLShadowMap: typeof WebGLShadowMap;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglShadowMap: WebGLShadowMapProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglShadowMap: string[];
        webglDepthBuffer: string[];
        webglStencilBuffer: string[];
        webglColorBuffer: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglShadowMap: string[];
        webglDepthBuffer: string[];
        webglStencilBuffer: string[];
        webglColorBuffer: string[];
    }
}
export type WebGLShadowMapProps = Node<WebGLShadowMap, typeof WebGLShadowMap, {
    _renderer: WebGLRenderer;
    _objects: WebGLObjects;
    _capabilities: WebGLCapabilities;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLShadowMap: Partial<{
            _renderer: WebGLRenderer;
            _objects: WebGLObjects;
            _capabilities: WebGLCapabilities;
        }>;
    }
}
//# sourceMappingURL=WebGLShadowMap.d.ts.map