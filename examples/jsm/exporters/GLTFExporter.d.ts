import { Node } from '../../../three-types';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
export * from 'three/examples/jsm/exporters/GLTFExporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        GLTFExporter: typeof GLTFExporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gltfExporter: GLTFExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gltfExporter: string[];
        gltfExporterOptions: string[];
        gltfWriter: string[];
        gltfExporterPlugin: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gltfExporter: string[];
        gltfExporterOptions: string[];
        gltfWriter: string[];
        gltfExporterPlugin: string[];
    }
}
export type GLTFExporterProps = Node<GLTFExporter, typeof GLTFExporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gltfExporter: {};
    }
}
//# sourceMappingURL=GLTFExporter.d.ts.map