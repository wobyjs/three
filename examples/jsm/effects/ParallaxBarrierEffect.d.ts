import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { ParallaxBarrierEffect } from 'three/examples/jsm/effects/ParallaxBarrierEffect.js';
export * from 'three/examples/jsm/effects/ParallaxBarrierEffect.js';
declare module '../../../lib/3/three' {
    interface Three {
        ParallaxBarrierEffect: typeof ParallaxBarrierEffect;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parallaxBarrierEffect: ParallaxBarrierEffectProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        parallaxBarrierEffect: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        parallaxBarrierEffect: string[];
    }
}
export type ParallaxBarrierEffectProps = Node<ParallaxBarrierEffect, typeof ParallaxBarrierEffect, {
    renderer: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        parallaxBarrierEffect: Partial<{
            renderer: WebGLRenderer;
        }>;
    }
}
//# sourceMappingURL=ParallaxBarrierEffect.d.ts.map