import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
export * from 'three/examples/jsm/controls/PointerLockControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        PointerLockControls: typeof PointerLockControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointerLockControls: PointerLockControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pointerLockControls: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pointerLockControls: string[];
    }
}
export type PointerLockControlsProps = Node<PointerLockControls, typeof PointerLockControls, {
    object: Camera;
    domElement: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pointerLockControls: Partial<{
            object: Camera;
            domElement: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=PointerLockControls.d.ts.map