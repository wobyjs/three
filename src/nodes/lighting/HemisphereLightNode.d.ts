import { HemisphereLight } from 'three/src/lights/HemisphereLight.js';
import { Node } from '../../../three-types';
import HemisphereLightNode from 'three/src/nodes/lighting/HemisphereLightNode.js';
export { HemisphereLightNode };
declare module '../../../lib/3/three' {
    interface Three {
        HemisphereLightNode: typeof HemisphereLightNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hemisphereLightNode: HemisphereLightNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        hemisphereLightNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        hemisphereLightNode: string[];
    }
}
export type HemisphereLightNodeProps = Node<HemisphereLightNode, typeof HemisphereLightNode, {
    light?: HemisphereLight | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        hemisphereLightNode: {
            light?: HemisphereLight | null;
        };
    }
}
//# sourceMappingURL=HemisphereLightNode.d.ts.map