import { Node } from '../../../three-types';
import { Program } from 'three/examples/jsm/transpiler/AST.js';
export * from 'three/examples/jsm/transpiler/AST.js';
declare module '../../../lib/3/three' {
    interface Three {
        Program: typeof Program;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            program: ProgramProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        program: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        program: string[];
    }
}
export type ProgramProps = Node<Program, typeof Program, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        program: {};
    }
}
//# sourceMappingURL=AST.d.ts.map