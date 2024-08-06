import { Node } from '../../../three-types';
import { PLYExporter } from 'three/examples/jsm/exporters/PLYExporter.js';
export * from 'three/examples/jsm/exporters/PLYExporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        PLYExporter: typeof PLYExporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            plyExporter: PLYExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        plyExporter: string[];
        plyExporterOptionsBase: string[];
        plyExporterOptionsBinary: string[];
        plyExporterOptionsString: string[];
        plyExporterOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        plyExporter: string[];
        plyExporterOptionsBase: string[];
        plyExporterOptionsBinary: string[];
        plyExporterOptionsString: string[];
        plyExporterOptions: string[];
    }
}
export type PLYExporterProps = Node<PLYExporter, typeof PLYExporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        plyExporter: {};
    }
}
//# sourceMappingURL=PLYExporter.d.ts.map