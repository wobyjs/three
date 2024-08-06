import { Node } from '../../../../three-types';
import Renderer from 'three/src/renderers/common/Renderer.js';
import PMREMGenerator from 'three/src/renderers/common/extras/PMREMGenerator.js';
export { PMREMGenerator };
declare module '../../../../lib/3/three' {
    interface Three {
        PMREMGenerator: typeof PMREMGenerator;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pmremGenerator: PMREMGeneratorProps;
        }
    }
}
declare module '../../../../lib/3/consParams' {
    interface consParams {
        pmremGenerator: string[];
    }
}
declare module '../../../../lib/3/objParams' {
    interface objParams {
        pmremGenerator: string[];
    }
}
export type PMREMGeneratorProps = Node<PMREMGenerator, typeof PMREMGenerator, {
    renderer: Renderer;
}>;
declare module '../../../../lib/3/defaults' {
    interface defaults {
        pMREMGenerator: Partial<{
            renderer: Renderer;
        }>;
    }
}
//# sourceMappingURL=PMREMGenerator.d.ts.map