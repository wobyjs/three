import { SSRPassParams, SSRPass } from 'three/examples/jsm/postprocessing/SSRPass.js';
export * from 'three/examples/jsm/postprocessing/SSRPass.js';
import { Node, WrapAsString } from '../../../three-types';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        SSRPass: typeof SSRPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ssrPass: SSRPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ssrPass: WrapAsString<SSRPassParams>;
        ssrPassParams: WrapAsString<SSRPassParams>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ssrPass: string[];
        ssrPassParams: string[];
    }
}
export type SSRPassProps = Node<SSRPass, typeof SSRPass, SSRPassParams>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        ssrPass: Partial<SSRPassParams>;
    }
}
//# sourceMappingURL=SSRPass.d.ts.map