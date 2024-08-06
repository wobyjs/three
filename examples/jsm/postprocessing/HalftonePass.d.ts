import { HalftonePassParameters, HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass.js';
export * from 'three/examples/jsm/postprocessing/HalftonePass.js';
import { Node } from '../../../three-types';
import '../../../lib/three/extensions';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        HalftonePass: typeof HalftonePass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            halftonePass: HalftonePassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        halftonePass: string[];
        halftonePassParameters: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        halftonePass: string[];
        halftonePassParameters: string[];
    }
}
export type HalftonePassProps = Node<HalftonePass, typeof HalftonePass, {
    width: number;
    height: number;
    params: HalftonePassParameters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        halftonePass: Partial<{
            width: number;
            height: number;
            params: HalftonePassParameters;
        }>;
    }
}
//# sourceMappingURL=HalftonePass.d.ts.map