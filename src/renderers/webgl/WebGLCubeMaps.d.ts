import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps.js';
export { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLCubeMaps: typeof WebGLCubeMaps;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCubeMaps: WebGLCubeMapsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglCubeMaps: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglCubeMaps: string[];
    }
}
export type WebGLCubeMapsProps = Node<WebGLCubeMaps, typeof WebGLCubeMaps, {
    renderer: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCubeMaps: Partial<{
            renderer: WebGLRenderer;
        }>;
    }
}
//# sourceMappingURL=WebGLCubeMaps.d.ts.map