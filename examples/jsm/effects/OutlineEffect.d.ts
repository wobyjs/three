import { OutlineEffectParameters, OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';
export * from 'three/examples/jsm/effects/OutlineEffect.js';
import { Node, WrapAsString } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        OutlineEffect: typeof OutlineEffect;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outlineEffect: OutlineEffectProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        outlineEffect: string[];
        outlineEffectParameters: WrapAsString<OutlineEffectParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        outlineEffect: string[];
        outlineEffectParameters: string[];
    }
}
export type OutlineEffectProps = Node<OutlineEffect, typeof OutlineEffect, {
    renderer: WebGLRenderer;
    parameters?: OutlineEffectParameters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        outlineEffect: Partial<{
            renderer: WebGLRenderer;
            parameters?: OutlineEffectParameters;
        }>;
    }
}
//# sourceMappingURL=OutlineEffect.d.ts.map