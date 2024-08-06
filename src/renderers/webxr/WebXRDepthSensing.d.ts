import { Object3DNode } from '../../../three-types';
import { WebXRDepthSensing } from 'three/src/renderers/webxr/WebXRDepthSensing.js';
export { WebXRDepthSensing } from 'three/src/renderers/webxr/WebXRDepthSensing.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebXRDepthSensing: typeof WebXRDepthSensing;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webXRDepthSensing: WebXRDepthSensingProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webXRDepthSensing: string[];
        xrWebGlDepthInformation: string[];
        webXrDepthSensing: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webXRDepthSensing: string[];
        xrWebGlDepthInformation: string[];
        webXrDepthSensing: string[];
    }
}
export type WebXRDepthSensingProps = Object3DNode<WebXRDepthSensing, typeof WebXRDepthSensing, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRDepthSensing: {};
    }
}
//# sourceMappingURL=WebXRDepthSensing.d.ts.map