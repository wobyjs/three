import { Node } from '../../../three-types';
import { Object3D } from 'three/src/core/Object3D.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { RenderTransitionPass } from 'three/examples/jsm/postprocessing/RenderTransitionPass.js';
export * from 'three/examples/jsm/postprocessing/RenderTransitionPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        RenderTransitionPass: typeof RenderTransitionPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderTransitionPass: RenderTransitionPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        renderTransitionPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        renderTransitionPass: string[];
    }
}
export type RenderTransitionPassProps = Node<RenderTransitionPass, typeof RenderTransitionPass, {
    sceneA: Object3D;
    cameraA: Camera;
    sceneB: Object3D;
    cameraB: Camera;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        renderTransitionPass: Partial<{
            sceneA: Object3D;
            cameraA: Camera;
            sceneB: Object3D;
            cameraB: Camera;
        }>;
    }
}
//# sourceMappingURL=RenderTransitionPass.d.ts.map