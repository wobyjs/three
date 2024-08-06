import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight.js';
export * from 'three/examples/jsm/webxr/XREstimatedLight.js';
declare module '../../../lib/3/three' {
    interface Three {
        XREstimatedLight: typeof XREstimatedLight;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrEstimatedLight: XREstimatedLightProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        xrEstimatedLight: string[];
        sessionLightProbe: string[];
        xrEstimatedLightEventMap: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        xrEstimatedLight: string[];
        sessionLightProbe: string[];
        xrEstimatedLightEventMap: string[];
    }
}
export type XREstimatedLightProps = Node<XREstimatedLight, typeof XREstimatedLight, {
    renderer: WebGLRenderer;
    environmentEstimation?: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        xrEstimatedLight: Partial<{
            renderer: WebGLRenderer;
            environmentEstimation?: boolean;
        }>;
    }
}
//# sourceMappingURL=XREstimatedLight.d.ts.map