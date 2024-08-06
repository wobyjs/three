import { Node } from '../../../three-types';
import { DRACOExporter } from 'three/examples/jsm/exporters/DRACOExporter.js';
export * from 'three/examples/jsm/exporters/DRACOExporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        DRACOExporter: typeof DRACOExporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dracoExporter: DRACOExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        dracoExporter: string[];
        dracoExporterOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        dracoExporter: string[];
        dracoExporterOptions: string[];
    }
}
export type DRACOExporterProps = Node<DRACOExporter, typeof DRACOExporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        dracoExporter: {};
    }
}
//# sourceMappingURL=DRACOExporter.d.ts.map