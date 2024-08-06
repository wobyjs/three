import { Node } from '../../../three-types';
import { MD2Character } from 'three/examples/jsm/misc/MD2Character.js';
export * from 'three/examples/jsm/misc/MD2Character.js';
declare module '../../../lib/3/three' {
    interface Three {
        MD2Character: typeof MD2Character;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            md2Character: MD2CharacterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        md2Character: string[];
        md2PartsConfig: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        md2Character: string[];
        md2PartsConfig: string[];
    }
}
export type MD2CharacterProps = Node<MD2Character, typeof MD2Character, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        md2Character: {};
    }
}
//# sourceMappingURL=MD2Character.d.ts.map