import { Node } from '../../../three-types';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
export * from 'three/examples/jsm/postprocessing/OutputPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        OutputPass: typeof OutputPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outputPass: OutputPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        outputPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        outputPass: string[];
    }
}
export type OutputPassProps = Node<OutputPass, typeof OutputPass, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        outputPass: Partial<{}>;
    }
}
//# sourceMappingURL=OutputPass.d.ts.map