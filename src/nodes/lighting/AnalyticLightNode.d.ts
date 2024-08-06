import { Light } from 'three/src/lights/Light.js';
import { Node } from '../../../three-types';
import AnalyticLightNode from 'three/src/nodes/lighting/AnalyticLightNode.js';
export { AnalyticLightNode };
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            analyticLightNode: AnalyticLightNodeProps<Light>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        analyticLightNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        analyticLightNode: string[];
    }
}
export type AnalyticLightNodeProps<T extends Light> = Node<AnalyticLightNode<T>, typeof AnalyticLightNode<T>, {
    light?: T | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        analyticLightNode: {
            light?: Light;
        };
    }
}
//# sourceMappingURL=AnalyticLightNode.d.ts.map