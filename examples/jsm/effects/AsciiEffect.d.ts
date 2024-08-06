import { AsciiEffectOptions, AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
export * from 'three/examples/jsm/effects/AsciiEffect.js';
import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
declare module '../../../lib/3/three' {
    interface Three {
        AsciiEffect: typeof AsciiEffect;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            asciiEffect: AsciiEffectProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        asciiEffect: string[];
        asciiEffectOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        asciiEffect: string[];
        asciiEffectOptions: string[];
    }
}
export type AsciiEffectProps = Node<AsciiEffect, typeof AsciiEffect, {
    renderer: WebGLRenderer;
    charSet?: string;
    options?: AsciiEffectOptions;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        asciiEffect: Partial<{
            renderer: WebGLRenderer;
            charSet?: string;
            options?: AsciiEffectOptions;
        }>;
    }
}
//# sourceMappingURL=AsciiEffect.d.ts.map