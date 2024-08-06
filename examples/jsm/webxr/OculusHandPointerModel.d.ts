import { Node } from '../../../three-types';
import { Object3D } from 'three/src/core/Object3D.js';
import { OculusHandPointerModel } from 'three/examples/jsm/webxr/OculusHandPointerModel.js';
export * from 'three/examples/jsm/webxr/OculusHandPointerModel.js';
declare module '../../../lib/3/three' {
    interface Three {
        OculusHandPointerModel: typeof OculusHandPointerModel;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            oculusHandPointerModel: OculusHandPointerModelProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        oculusHandPointerModel: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        oculusHandPointerModel: string[];
    }
}
export type OculusHandPointerModelProps = Node<OculusHandPointerModel, typeof OculusHandPointerModel, {
    hand: Object3D;
    controller: Object3D;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        oculusHandPointerModel: Partial<{
            hand: Object3D;
            controller: Object3D;
        }>;
    }
}
//# sourceMappingURL=OculusHandPointerModel.d.ts.map