import { Node } from '../../../three-types';
import Transpiler from 'three/examples/jsm/transpiler/Transpiler.js';
export * from 'three/examples/jsm/transpiler/Transpiler.js';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            transpiler: TranspilerProps<any, IntrinsicElements>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        transpiler: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        transpiler: string[];
    }
}
export type TranspilerProps<U, V> = Node<Transpiler<U, V>, typeof Transpiler<U, V>, {
    decoder: {
        parse(source: string): U;
    };
    encoder: {
        emit(decoded: U): V;
    };
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        transpiler: {
            decoder?: {
                parse(source: string): any;
            };
            encoder?: {
                emit(decoded: any): any;
            };
        };
    }
}
//# sourceMappingURL=Transpiler.d.ts.map