import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { ProgressiveLightMap } from 'three/examples/jsm/misc/ProgressiveLightMap.js';
export * from 'three/examples/jsm/misc/ProgressiveLightMap.js';
declare module '../../../lib/3/three' {
    interface Three {
        ProgressiveLightMap: typeof ProgressiveLightMap;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            progressiveLightMap: ProgressiveLightMapProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        progressiveLightMap: string[];
        uvBoxes: string[];
        lightMapContainers: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        progressiveLightMap: string[];
        uvBoxes: string[];
        lightMapContainers: string[];
    }
}
export type ProgressiveLightMapProps = Node<ProgressiveLightMap, typeof ProgressiveLightMap, {
    renderer: WebGLRenderer;
    res?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        progressiveLightMap: Partial<{
            renderer: WebGLRenderer;
            res?: number;
        }>;
    }
}
//# sourceMappingURL=ProgressiveLightMap.d.ts.map