import { Node } from '../../../three-types';
import { EdgeSplitModifier } from 'three/examples/jsm/modifiers/EdgeSplitModifier.js';
export * from 'three/examples/jsm/modifiers/EdgeSplitModifier.js';
declare module '../../../lib/3/three' {
    interface Three {
        EdgeSplitModifier: typeof EdgeSplitModifier;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            edgeSplitModifier: EdgeSplitModifierProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        edgeSplitModifier: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        edgeSplitModifier: string[];
    }
}
export type EdgeSplitModifierProps = Node<EdgeSplitModifier, typeof EdgeSplitModifier, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        edgeSplitModifier: {};
    }
}
//# sourceMappingURL=EdgeSplitModifier.d.ts.map