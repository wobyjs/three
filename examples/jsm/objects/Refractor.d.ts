import { RefractorOptions, Refractor } from 'three/examples/jsm/objects/Refractor.js';
export * from 'three/examples/jsm/objects/Refractor.js';
import { Node } from '../../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        Refractor: typeof Refractor;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            refractor: RefractorProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        refractor: string[];
        refractorOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        refractor: string[];
        refractorOptions: string[];
    }
}
export type RefractorProps = Node<Refractor, typeof Refractor, {
    geometry?: BufferGeometry;
    options?: RefractorOptions;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        refractor: Partial<{
            geometry?: BufferGeometry;
            options?: RefractorOptions;
        }>;
    }
}
//# sourceMappingURL=Refractor.d.ts.map