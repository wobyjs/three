import { Node } from '../../../three-types';
import LightingNode from 'three/src/nodes/lighting/LightingNode.js';
export { LightingNode };
declare module '../../../lib/3/three' {
    interface Three {
        LightingNode: typeof LightingNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightingNode: LightingNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lightingNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lightingNode: string[];
    }
}
export type LightingNodeProps = Node<LightingNode, typeof LightingNode, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingNode: {};
    }
}
//# sourceMappingURL=LightingNode.d.ts.map