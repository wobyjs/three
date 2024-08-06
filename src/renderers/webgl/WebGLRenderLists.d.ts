import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js';
import { Node } from '../../../three-types';
import { WebGLRenderLists } from 'three/src/renderers/webgl/WebGLRenderLists.js';
export { WebGLRenderLists } from 'three/src/renderers/webgl/WebGLRenderLists.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLRenderLists: typeof WebGLRenderLists;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglRenderLists: WebGLRenderListsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglRenderLists: string[];
        renderItem: string[];
        webglRenderList: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglRenderLists: string[];
        renderItem: string[];
        webglRenderList: string[];
    }
}
export type WebGLRenderListsProps = Node<WebGLRenderLists, typeof WebGLRenderLists, {
    properties: WebGLProperties;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLRenderLists: Partial<{
            properties: WebGLProperties;
        }>;
    }
}
//# sourceMappingURL=WebGLRenderLists.d.ts.map