import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect.js';
export * from 'three/examples/jsm/effects/AnaglyphEffect.js';
declare module '../../../lib/3/three' {
    interface Three {
        AnaglyphEffect: typeof AnaglyphEffect;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            anaglyphEffect: AnaglyphEffectProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        anaglyphEffect: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        anaglyphEffect: string[];
    }
}
export type AnaglyphEffectProps = Node<AnaglyphEffect, typeof AnaglyphEffect, {
    renderer: WebGLRenderer;
    width?: number;
    height?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        anaglyphEffect: Partial<{
            renderer: WebGLRenderer;
            width?: number;
            height?: number;
        }>;
    }
}
//# sourceMappingURL=AnaglyphEffect.d.ts.map