import { Node } from '../../../three-types';
import { Lensflare } from 'three/examples/jsm/objects/Lensflare.js';
export * from 'three/examples/jsm/objects/Lensflare.js';
declare module '../../../lib/3/three' {
    interface Three {
        Lensflare: typeof Lensflare;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lensflare: LensflareProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lensflare: string[];
        lensflareElement: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lensflare: string[];
        lensflareElement: string[];
    }
}
export type LensflareProps = Node<Lensflare, typeof Lensflare, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lensflare: Partial<{}>;
    }
}
//# sourceMappingURL=Lensflare.d.ts.map