import { Node } from '../../../three-types';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
export * from 'three/examples/jsm/exporters/STLExporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        STLExporter: typeof STLExporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stlExporter: STLExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        stlExporter: string[];
        stlExporterOptionsBinary: string[];
        stlExporterOptionsString: string[];
        stlExporterOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        stlExporter: string[];
        stlExporterOptionsBinary: string[];
        stlExporterOptionsString: string[];
        stlExporterOptions: string[];
    }
}
export type STLExporterProps = Node<STLExporter, typeof STLExporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        stlExporter: {};
    }
}
//# sourceMappingURL=STLExporter.d.ts.map