import { LUTPassParameters, LUTPass } from 'three/examples/jsm/postprocessing/LUTPass.js';
export * from 'three/examples/jsm/postprocessing/LUTPass.js';
import { Node, WrapAsString } from '../../../three-types';
import '../../../lib/three/extensions';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        LUTPass: typeof LUTPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lutPass: LUTPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lutPass: WrapAsString<LUTPassParameters>;
        lutPassParameters: WrapAsString<LUTPassParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lutPass: string[];
        lutPassParameters: string[];
    }
}
export type LUTPassProps = Node<LUTPass, typeof LUTPass, LUTPassParameters>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lutPass: LUTPassParameters;
    }
}
//# sourceMappingURL=LUTPass.d.ts.map