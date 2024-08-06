import { Node } from '../../../three-types';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
export * from 'three/examples/jsm/exporters/OBJExporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        OBJExporter: typeof OBJExporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            objExporter: OBJExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        objExporter: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        objExporter: string[];
    }
}
export type OBJExporterProps = Node<OBJExporter, typeof OBJExporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        objExporter: {};
    }
}
//# sourceMappingURL=OBJExporter.d.ts.map