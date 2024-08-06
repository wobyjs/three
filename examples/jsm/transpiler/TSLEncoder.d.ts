import { Node } from '../../../three-types';
import TSLEncoder from 'three/examples/jsm/transpiler/TSLEncoder.js';
export * from 'three/examples/jsm/transpiler/TSLEncoder.js';
declare module '../../../lib/3/three' {
    interface Three {
        TSLEncoder: typeof TSLEncoder;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tslEncoder: TSLEncoderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        tslEncoder: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        tslEncoder: string[];
    }
}
export type TSLEncoderProps = Node<TSLEncoder, typeof TSLEncoder, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        tslEncoder: {};
    }
}
//# sourceMappingURL=TSLEncoder.d.ts.map