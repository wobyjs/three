import { Node } from '../../../three-types';
import { MD2CharacterComplex } from 'three/examples/jsm/misc/MD2CharacterComplex.js';
export { MD2CharacterComplex } from 'three/examples/jsm/misc/MD2CharacterComplex.js';
declare module '../../../lib/3/three' {
    interface Three {
        MD2CharacterComplex: typeof MD2CharacterComplex;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            md2CharacterComplex: MD2CharacterComplexProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        md2CharacterComplex: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        md2CharacterComplex: string[];
    }
}
export type MD2CharacterComplexProps = Node<MD2CharacterComplex, typeof MD2CharacterComplex, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        md2CharacterComplex: {};
    }
}
//# sourceMappingURL=MD2CharacterComplex.d.ts.map