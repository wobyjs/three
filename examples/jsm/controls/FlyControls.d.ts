import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
export * from 'three/examples/jsm/controls/FlyControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        FlyControls: typeof FlyControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            flyControls: FlyControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        flyControls: string[];
        flyControlsEventMap: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        flyControls: string[];
        flyControlsEventMap: string[];
    }
}
export type FlyControlsProps = Node<FlyControls, typeof FlyControls, {
    object: Camera;
    domElement?: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        flyControls: Partial<{
            object: Camera;
            domElement?: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=FlyControls.d.ts.map