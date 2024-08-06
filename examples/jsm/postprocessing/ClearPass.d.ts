import { Node } from '../../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
export * from 'three/examples/jsm/postprocessing/ClearPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        ClearPass: typeof ClearPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            clearPass: ClearPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        clearPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        clearPass: string[];
    }
}
export type ClearPassProps = Node<ClearPass, typeof ClearPass, {
    clearColor?: ColorRepresentation;
    clearAlpha?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        clearPass: Partial<{
            clearColor?: ColorRepresentation;
            clearAlpha?: number;
        }>;
    }
}
//# sourceMappingURL=ClearPass.d.ts.map