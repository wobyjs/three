import LightingNode from 'three/src/nodes/lighting/LightingNode.js';
import { Node } from '../../../three-types';
import LightsNode from 'three/src/nodes/lighting/LightsNode.js';
export { LightsNode };
declare module '../../../lib/3/three' {
    interface Three {
        LightsNode: typeof LightsNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightsNode: LightsNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lightsNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lightsNode: string[];
    }
}
export type LightsNodeProps = Node<LightsNode, typeof LightsNode, {
    lightNodes?: LightingNode[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lightsNode: {
            lightNodes?: LightingNode[];
        };
    }
}
//# sourceMappingURL=LightsNode.d.ts.map