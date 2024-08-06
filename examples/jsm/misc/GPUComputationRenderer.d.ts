import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js';
export * from 'three/examples/jsm/misc/GPUComputationRenderer.js';
declare module '../../../lib/3/three' {
    interface Three {
        GPUComputationRenderer: typeof GPUComputationRenderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gpuComputationRenderer: GPUComputationRendererProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gpuComputationRenderer: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gpuComputationRenderer: string[];
    }
}
export type GPUComputationRendererProps = Node<GPUComputationRenderer, typeof GPUComputationRenderer, {
    sizeX: number;
    sizeY: number;
    renderer: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gpuComputationRenderer: Partial<{
            sizeX: number;
            sizeY: number;
            renderer: WebGLRenderer;
        }>;
    }
}
//# sourceMappingURL=GPUComputationRenderer.d.ts.map