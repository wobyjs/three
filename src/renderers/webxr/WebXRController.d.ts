import { Object3DNode } from '../../../three-types';
import { WebXRController } from 'three/src/renderers/webxr/WebXRController.js';
export { WebXRController } from 'three/src/renderers/webxr/WebXRController.js';
import '../../../src/objects/Group';
declare module '../../../lib/3/three' {
    interface Three {
        WebXRController: typeof WebXRController;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webxrController: WebXRControllerProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webxrController: string[];
        xrJointSpace: string[];
        xrHandInputState: string[];
        webXrSpaceEventMap: string[];
        xrHandSpace: string[];
        xrTargetRaySpace: string[];
        xrGripSpace: string[];
        webXrController: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webxrController: string[];
        xrJointSpace: string[];
        xrHandInputState: string[];
        webXrSpaceEventMap: string[];
        xrHandSpace: string[];
        xrTargetRaySpace: string[];
        xrGripSpace: string[];
        webXrController: string[];
    }
}
export type WebXRControllerProps = Object3DNode<WebXRController, typeof WebXRController, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRController: {};
    }
}
//# sourceMappingURL=WebXRController.d.ts.map