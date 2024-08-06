import { Node } from '../../../three-types';
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js';
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js';
export * from 'three/examples/jsm/postprocessing/SavePass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        SavePass: typeof SavePass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            savePass: SavePassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        savePass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        savePass: string[];
    }
}
export type SavePassProps = Node<SavePass, typeof SavePass, {
    renderTarget?: WebGLRenderTarget;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        savePass: Partial<{
            renderTarget?: WebGLRenderTarget;
        }>;
    }
}
//# sourceMappingURL=SavePass.d.ts.map