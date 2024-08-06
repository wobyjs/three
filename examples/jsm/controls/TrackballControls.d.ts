import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
export * from 'three/examples/jsm/controls/TrackballControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        TrackballControls: typeof TrackballControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            trackballControls: TrackballControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        trackballControls: string[];
        trackballControlsEventMap: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        trackballControls: string[];
        trackballControlsEventMap: string[];
    }
}
export type TrackballControlsProps = Node<TrackballControls, typeof TrackballControls, {
    object: Camera;
    domElement: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        trackballControls: Partial<{
            object: Camera;
            domElement: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=TrackballControls.d.ts.map