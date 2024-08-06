import { Node } from '../../../three-types';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
export * from 'three/examples/jsm/postprocessing/AfterimagePass.js';
declare module '../../../lib/3/three' {
    interface Three {
        AfterimagePass: typeof AfterimagePass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            afterimagePass: AfterimagePassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        afterimagePass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        afterimagePass: string[];
    }
}
export type AfterimagePassProps = Node<AfterimagePass, typeof AfterimagePass, {
    damp?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        afterimagePass: Partial<{
            damp?: number;
        }>;
    }
}
//# sourceMappingURL=AfterimagePass.d.ts.map