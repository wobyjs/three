import { Node } from '../../../three-types';
import { KTX2Exporter } from 'three/examples/jsm/exporters/KTX2Exporter.js';
export * from 'three/examples/jsm/exporters/KTX2Exporter.js';
declare module '../../../lib/3/three' {
    interface Three {
        KTX2Exporter: typeof KTX2Exporter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ktx2Exporter: KTX2ExporterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ktx2Exporter: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ktx2Exporter: string[];
    }
}
export type KTX2ExporterProps = Node<KTX2Exporter, typeof KTX2Exporter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        ktx2Exporter: {};
    }
}
//# sourceMappingURL=KTX2Exporter.d.ts.map