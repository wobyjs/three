import { Node } from '../../../three-types';
import { SimplifyModifier } from 'three/examples/jsm/modifiers/SimplifyModifier.js';
export * from 'three/examples/jsm/modifiers/SimplifyModifier.js';
declare module '../../../lib/3/three' {
    interface Three {
        SimplifyModifier: typeof SimplifyModifier;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            simplifyModifier: SimplifyModifierProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        simplifyModifier: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        simplifyModifier: string[];
    }
}
export type SimplifyModifierProps = Node<SimplifyModifier, typeof SimplifyModifier, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        simplifyModifier: {};
    }
}
//# sourceMappingURL=SimplifyModifier.d.ts.map