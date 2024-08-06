import { Node, Vector2 } from '../../../three-types';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js';
export * from 'three/examples/jsm/postprocessing/DotScreenPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        DotScreenPass: typeof DotScreenPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dotScreenPass: DotScreenPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        dotScreenPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        dotScreenPass: string[];
    }
}
export type DotScreenPassProps = Node<DotScreenPass, typeof DotScreenPass, {
    center?: Vector2;
    angle?: number;
    scale?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        dotScreenPass: Partial<{
            center?: Vector2;
            angle?: number;
            scale?: number;
        }>;
    }
}
//# sourceMappingURL=DotScreenPass.d.ts.map