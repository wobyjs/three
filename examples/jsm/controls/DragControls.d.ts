import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
export * from 'three/examples/jsm/controls/DragControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        DragControls: typeof DragControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dragControls: DragControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        dragControls: string[];
        dragControlsEventMap: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        dragControls: string[];
        dragControlsEventMap: string[];
    }
}
export type DragControlsProps = Node<DragControls, typeof DragControls, {
    objects: Object3D[];
    camera: Camera;
    domElement?: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        dragControls: Partial<{
            objects: Object3D[];
            camera: Camera;
            domElement?: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=DragControls.d.ts.map