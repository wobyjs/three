import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export * from 'three/examples/jsm/controls/OrbitControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        OrbitControls: typeof OrbitControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: OrbitControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        orbitControls: string[];
        orbitControlsEventMap: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        orbitControls: string[];
        orbitControlsEventMap: string[];
    }
}
export type OrbitControlsProps = Node<OrbitControls, typeof OrbitControls, {
    camera: Camera;
    domElement: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        orbitControls: Partial<{
            camera: Camera;
            domElement: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=OrbitControls.d.ts.map