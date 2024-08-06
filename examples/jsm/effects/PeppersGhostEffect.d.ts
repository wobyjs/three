import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { PeppersGhostEffect } from 'three/examples/jsm/effects/PeppersGhostEffect.js';
export * from 'three/examples/jsm/effects/PeppersGhostEffect.js';
declare module '../../../lib/3/three' {
    interface Three {
        PeppersGhostEffect: typeof PeppersGhostEffect;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            peppersGhostEffect: PeppersGhostEffectProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        peppersGhostEffect: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        peppersGhostEffect: string[];
    }
}
export type PeppersGhostEffectProps = Node<PeppersGhostEffect, typeof PeppersGhostEffect, {
    renderer: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        peppersGhostEffect: Partial<{
            renderer: WebGLRenderer;
        }>;
    }
}
//# sourceMappingURL=PeppersGhostEffect.d.ts.map