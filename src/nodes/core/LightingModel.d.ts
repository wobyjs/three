import { Node } from '../../../three-types';
import LightingModel from 'three/src/nodes/core/LightingModel.js';
export { LightingModel };
declare module '../../../lib/3/three' {
    interface Three {
        LightingModel: typeof LightingModel;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightingModel: LightingModelProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lightingModel: string[];
        lightingModelReflectedLight: string[];
        lightingModelDirectInput: string[];
        lightingModelIndirectInput: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lightingModel: string[];
        lightingModelReflectedLight: string[];
        lightingModelDirectInput: string[];
        lightingModelIndirectInput: string[];
    }
}
export type LightingModelProps = Node<LightingModel, typeof LightingModel, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingModel: {};
    }
}
//# sourceMappingURL=LightingModel.d.ts.map