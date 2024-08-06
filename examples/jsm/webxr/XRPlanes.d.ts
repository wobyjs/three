import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { XRPlanes } from 'three/examples/jsm/webxr/XRPlanes.js';
export * from 'three/examples/jsm/webxr/XRPlanes.js';
declare module '../../../lib/3/three' {
    interface Three {
        XRPlanes: typeof XRPlanes;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrPlanes: XRPlanesProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        xrPlanes: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        xrPlanes: string[];
    }
}
export type XRPlanesProps = Node<XRPlanes, typeof XRPlanes, {
    renderer: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        xrPlanes: {
            renderer?: WebGLRenderer;
        };
    }
}
//# sourceMappingURL=XRPlanes.d.ts.map