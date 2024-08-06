import { Node } from '../../../three-types';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
export * from 'three/examples/jsm/postprocessing/BloomPass.js';
declare module '../../../lib/3/three' {
    interface Three {
        BloomPass: typeof BloomPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bloomPass: BloomPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        bloomPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        bloomPass: string[];
    }
}
export type BloomPassProps = Node<BloomPass, typeof BloomPass, {
    strength?: number;
    kernelSize?: number;
    sigma?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        bloomPass: Partial<{
            strength?: number;
            kernelSize?: number;
            sigma?: number;
        }>;
    }
}
//# sourceMappingURL=BloomPass.d.ts.map