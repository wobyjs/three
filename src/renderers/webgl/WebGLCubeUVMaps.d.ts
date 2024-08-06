import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { WebGLCubeUVMaps } from 'three/src/renderers/webgl/WebGLCubeUVMaps.js';
export { WebGLCubeUVMaps } from 'three/src/renderers/webgl/WebGLCubeUVMaps.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLCubeUVMaps: typeof WebGLCubeUVMaps;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCubeUVMaps: WebGLCubeUVMapsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglCubeUvMaps: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglCubeUvMaps: string[];
    }
}
export type WebGLCubeUVMapsProps = Node<WebGLCubeUVMaps, typeof WebGLCubeUVMaps, {
    renderer: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCubeUVMaps: Partial<{
            renderer: WebGLRenderer;
        }>;
    }
}
//# sourceMappingURL=WebGLCubeUVMaps.d.ts.map