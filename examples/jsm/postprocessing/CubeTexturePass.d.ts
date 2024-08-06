import { Node } from '../../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass.js';
export * from 'three/examples/jsm/postprocessing/CubeTexturePass.js';
declare module '../../../lib/3/three' {
    interface Three {
        CubeTexturePass: typeof CubeTexturePass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeTexturePass: CubeTexturePassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        cubeTexturePass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        cubeTexturePass: string[];
    }
}
export type CubeTexturePassProps = Node<CubeTexturePass, typeof CubeTexturePass, {
    clearColor?: ColorRepresentation;
    clearAlpha?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cubeTexturePass: Partial<{
            clearColor?: ColorRepresentation;
            clearAlpha?: number;
        }>;
    }
}
//# sourceMappingURL=CubeTexturePass.d.ts.map