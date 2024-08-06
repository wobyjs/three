import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
export * from 'three/examples/jsm/controls/FirstPersonControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        FirstPersonControls: typeof FirstPersonControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            firstPersonControls: FirstPersonControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        firstPersonControls: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        firstPersonControls: string[];
    }
}
export type FirstPersonControlsProps = Node<FirstPersonControls, typeof FirstPersonControls, {
    object: Camera;
    domElement?: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        firstPersonControls: Partial<{
            object: Camera;
            domElement?: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=FirstPersonControls.d.ts.map