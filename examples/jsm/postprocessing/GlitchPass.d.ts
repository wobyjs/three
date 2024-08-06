import { Node } from '../../../three-types';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
export * from 'three/examples/jsm/postprocessing/GlitchPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        GlitchPass: typeof GlitchPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            glitchPass: GlitchPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        glitchPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        glitchPass: string[];
    }
}
export type GlitchPassProps = Node<GlitchPass, typeof GlitchPass, {
    dt_size?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        glitchPass: Partial<{
            dt_size?: number;
        }>;
    }
}
//# sourceMappingURL=GlitchPass.d.ts.map