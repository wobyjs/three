import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
export * from 'three/examples/jsm/postprocessing/EffectComposer.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        EffectComposer: typeof EffectComposer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            effectComposer: EffectComposerProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        effectComposer: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        effectComposer: string[];
    }
}
export type EffectComposerProps = Node<EffectComposer, typeof EffectComposer, {
    renderer: WebGLRenderer;
    renderTarget?: WebGLRenderTarget;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        effectComposer: Partial<{
            renderer: WebGLRenderer;
            renderTarget?: WebGLRenderTarget;
        }>;
    }
}
//# sourceMappingURL=EffectComposer.d.ts.map