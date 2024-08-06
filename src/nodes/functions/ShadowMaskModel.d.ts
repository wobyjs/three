import { Node } from '../../../three-types';
import ShadowMaskModel from 'three/src/nodes/functions/ShadowMaskModel.js';
export { ShadowMaskModel };
declare module '../../../lib/3/three' {
    interface Three {
        ShadowMaskModel: typeof ShadowMaskModel;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowMaskModel: ShadowMaskModelProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        shadowMaskModel: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        shadowMaskModel: string[];
    }
}
export type ShadowMaskModelProps = Node<ShadowMaskModel, typeof ShadowMaskModel, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowMaskModel: {};
    }
}
//# sourceMappingURL=ShadowMaskModel.d.ts.map