import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect.js';
export * from 'three/examples/jsm/effects/StereoEffect.js';
declare module '../../../lib/3/three' {
    interface Three {
        StereoEffect: typeof StereoEffect;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stereoEffect: StereoEffectProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        stereoEffect: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        stereoEffect: string[];
    }
}
export type StereoEffectProps = Node<StereoEffect, typeof StereoEffect, {
    renderer: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        stereoEffect: Partial<{
            renderer: WebGLRenderer;
        }>;
    }
}
//# sourceMappingURL=StereoEffect.d.ts.map