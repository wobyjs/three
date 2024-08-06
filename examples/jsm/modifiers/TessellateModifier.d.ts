import { Node } from '../../../three-types';
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js';
export * from 'three/examples/jsm/modifiers/TessellateModifier.js';
declare module '../../../lib/3/three' {
    interface Three {
        TessellateModifier: typeof TessellateModifier;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tessellateModifier: TessellateModifierProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        tessellateModifier: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        tessellateModifier: string[];
    }
}
export type TessellateModifierProps = Node<TessellateModifier, typeof TessellateModifier, {
    maxEdgeLength?: number;
    maxIterations?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        tessellateModifier: {
            maxEdgeLength?: number;
            maxIterations?: number;
        };
    }
}
//# sourceMappingURL=TessellateModifier.d.ts.map