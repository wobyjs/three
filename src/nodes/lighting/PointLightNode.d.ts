import { PointLight } from 'three/src/lights/PointLight.js';
import { Node } from '../../../three-types';
import PointLightNode from 'three/src/nodes/lighting/PointLightNode.js';
export { PointLightNode };
declare module '../../../lib/3/three' {
    interface Three {
        PointLightNode: typeof PointLightNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLightNode: PointLightNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pointLightNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pointLightNode: string[];
    }
}
export type PointLightNodeProps = Node<PointLightNode, typeof PointLightNode, {
    light?: PointLight | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pointLightNode: {
            light?: PointLight | null;
        };
    }
}
//# sourceMappingURL=PointLightNode.d.ts.map