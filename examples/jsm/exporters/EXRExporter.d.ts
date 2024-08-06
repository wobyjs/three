import { Node } from '../../../three-types';
import { EXRExporter } from 'three/examples/jsm/exporters/EXRExporter.js';
export * from 'three/examples/jsm/exporters/EXRExporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        EXRExporter: typeof EXRExporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            exrExporter: EXRExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        exrExporter: string[];
        exrExporterParseOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        exrExporter: string[];
        exrExporterParseOptions: string[];
    }
}
export type EXRExporterProps = Node<EXRExporter, typeof EXRExporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        exrExporter: {};
    }
}
//# sourceMappingURL=EXRExporter.d.ts.map