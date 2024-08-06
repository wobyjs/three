import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import PhysicalLightingModel from 'three/src/nodes/functions/PhysicalLightingModel.js';
export { PhysicalLightingModel };
declare module '../../../lib/3/three' {
    interface Three {
        PhysicalLightingModel: typeof PhysicalLightingModel;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            physicalLightingModel: PhysicalLightingModelProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        physicalLightingModel: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        physicalLightingModel: string[];
    }
}
export type PhysicalLightingModelProps = Node<PhysicalLightingModel, typeof PhysicalLightingModel, {
    singleScatter: ENode;
    multiScatter: ENode;
    specularF90: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        physicalLightingModel: Partial<{
            singleScatter: ENode;
            multiScatter: ENode;
            specularF90: ENode;
        }>;
    }
}
//# sourceMappingURL=PhysicalLightingModel.d.ts.map