import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
export * from 'three/examples/jsm/controls/TransformControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        TransformControls: typeof TransformControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            transformControls: TransformControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        transformControls: string[];
        transformControlsEventMap: string[];
        transformControlsGizmo: string[];
        transformControlsPlane: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        transformControls: string[];
        transformControlsEventMap: string[];
        transformControlsGizmo: string[];
        transformControlsPlane: string[];
    }
}
export type TransformControlsProps = Node<TransformControls, typeof TransformControls, {
    object: Camera;
    domElement: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        transformControls: Partial<{
            object: Camera;
            domElement: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=TransformControls.d.ts.map