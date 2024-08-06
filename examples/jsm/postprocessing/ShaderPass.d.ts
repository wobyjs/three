import { Node } from '../../../three-types';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
export * from 'three/examples/jsm/postprocessing/ShaderPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        ShaderPass: typeof ShaderPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shaderPass: ShaderPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        shaderPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        shaderPass: string[];
    }
}
export type ShaderPassProps = Node<ShaderPass, typeof ShaderPass, {
    shader: object;
    textureID?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        shaderPass: Partial<{
            shader: object;
            textureID?: string;
        }>;
    }
}
//# sourceMappingURL=ShaderPass.d.ts.map