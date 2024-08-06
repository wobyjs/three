import { Node } from '../../../three-types';
import { MMDExporter } from 'three/examples/jsm/exporters/MMDExporter.js';
export * from 'three/examples/jsm/exporters/MMDExporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        MMDExporter: typeof MMDExporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdExporter: MMDExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdExporter: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        mmdExporter: string[];
    }
}
export type MMDExporterProps = Node<MMDExporter, typeof MMDExporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdExporter: {};
    }
}
//# sourceMappingURL=MMDExporter.d.ts.map