import { Node } from '../../../three-types';
import PhongLightingModel from 'three/src/nodes/functions/PhongLightingModel.js';
export { PhongLightingModel };
declare module '../../../lib/3/three' {
    interface Three {
        PhongLightingModel: typeof PhongLightingModel;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            phongLightingModel: PhongLightingModelProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        phongLightingModel: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        phongLightingModel: string[];
    }
}
export type PhongLightingModelProps = Node<PhongLightingModel, typeof PhongLightingModel, {
    specular?: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        phongLightingModel: {
            specular?: boolean;
        };
    }
}
//# sourceMappingURL=PhongLightingModel.d.ts.map