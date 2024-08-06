import { Node } from '../../../three-types';
import { Group } from 'three/src/objects/Group.js';
import { XRHandModel, XRHandModelHandedness } from 'three/examples/jsm/webxr/XRHandModelFactory.js';
import { XRHandPrimitiveModel, XRHandPrimitiveModelOptions } from 'three/examples/jsm/webxr/XRHandPrimitiveModel.js';
export * from 'three/examples/jsm/webxr/XRHandPrimitiveModel.js';
declare module '../../../lib/3/three' {
    interface Three {
        XRHandPrimitiveModel: typeof XRHandPrimitiveModel;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrHandPrimitiveModel: XRHandPrimitiveModelProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        xrHandPrimitiveModel: string[];
        xrHandPrimitiveModelOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        xrHandPrimitiveModel: string[];
        xrHandPrimitiveModelOptions: string[];
    }
}
export type XRHandPrimitiveModelProps = Node<XRHandPrimitiveModel, typeof XRHandPrimitiveModel, {
    handModel: XRHandModel;
    controller: Group;
    path: string;
    handedness: XRHandModelHandedness;
    options: XRHandPrimitiveModelOptions;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        xrHandPrimitiveModel: Partial<{
            handModel: XRHandModel;
            controller: Group;
            path: string;
            handedness: XRHandModelHandedness;
            options: XRHandPrimitiveModelOptions;
        }>;
    }
}
//# sourceMappingURL=XRHandPrimitiveModel.d.ts.map