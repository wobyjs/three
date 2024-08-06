import { Node } from '../../../three-types';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
export * from 'three/examples/jsm/postprocessing/SMAAPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        SMAAPass: typeof SMAAPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            smaaPass: SMAAPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        smaaPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        smaaPass: string[];
    }
}
export type SMAAPassProps = Node<SMAAPass, typeof SMAAPass, {
    shader: object;
    textureID?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        smaaPass: Partial<{
            shader: object;
            textureID?: string;
        }>;
    }
}
//# sourceMappingURL=SMAAPass.d.ts.map