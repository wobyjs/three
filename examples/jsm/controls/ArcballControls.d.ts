import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { Scene } from 'three/src/scenes/Scene.js';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls.js';
export * from 'three/examples/jsm/controls/ArcballControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        ArcballControls: typeof ArcballControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arcballControls: ArcballControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        arcballControls: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        arcballControls: string[];
        arcballControlsEventMap: string[];
    }
}
export type ArcballControlsProps = Node<ArcballControls, typeof ArcballControls, {
    camera: Camera;
    domElement: HTMLElement;
    scene?: Scene | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        arcballControls: Partial<{
            camera: Camera;
            domElement: HTMLElement;
            scene?: Scene | null;
        }>;
    }
}
//# sourceMappingURL=ArcballControls.d.ts.map