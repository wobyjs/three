import { Node } from '../../../three-types';
import ShaderToyDecoder from 'three/examples/jsm/transpiler/ShaderToyDecoder.js';
export * from 'three/examples/jsm/transpiler/ShaderToyDecoder.js';
declare module '../../../lib/3/three' {
    interface Three {
        ShaderToyDecoder: typeof ShaderToyDecoder;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shaderToyDecoder: ShaderToyDecoderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        shaderToyDecoder: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        shaderToyDecoder: string[];
    }
}
export type ShaderToyDecoderProps = Node<ShaderToyDecoder, typeof ShaderToyDecoder, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        shaderToyDecoder: {};
    }
}
//# sourceMappingURL=ShaderToyDecoder.d.ts.map