import { Node } from '../../../three-types';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
export * from 'three/examples/jsm/exporters/USDZExporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        USDZExporter: typeof USDZExporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            usdzExporter: USDZExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        usdzExporter: string[];
        usdzExporterOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        usdzExporter: string[];
        usdzExporterOptions: string[];
    }
}
export type USDZExporterProps = Node<USDZExporter, typeof USDZExporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        usdzExporter: {};
    }
}
//# sourceMappingURL=USDZExporter.d.ts.map