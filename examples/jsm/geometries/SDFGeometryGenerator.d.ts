import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { SDFGeometryGenerator } from 'three/examples/jsm/geometries/SDFGeometryGenerator.js';
export * from 'three/examples/jsm/geometries/SDFGeometryGenerator.js';
declare module '../../../lib/3/three' {
    interface Three {
        SDFGeometryGenerator: typeof SDFGeometryGenerator;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sdfGeometryGenerator: SDFGeometryGeneratorProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        sdfGeometryGenerator: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        sdfGeometryGenerator: string[];
    }
}
export type SDFGeometryGeneratorProps = Node<SDFGeometryGenerator, typeof SDFGeometryGenerator, {
    renderer: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        sDFGeometryGenerator: Partial<{
            renderer: WebGLRenderer;
        }>;
    }
}
//# sourceMappingURL=SDFGeometryGenerator.d.ts.map