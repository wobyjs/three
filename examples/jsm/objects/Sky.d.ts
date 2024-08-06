import { Node } from '../../../three-types';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
export * from 'three/examples/jsm/objects/Sky.js';
declare module '../../../lib/3/three' {
    interface Three {
        Sky: typeof Sky;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sky: SkyProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        sky: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        sky: string[];
    }
}
export type SkyProps = Node<Sky, typeof Sky, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        sky: Partial<{}>;
    }
}
//# sourceMappingURL=Sky.d.ts.map