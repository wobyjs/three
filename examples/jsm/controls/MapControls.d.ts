import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
export * from 'three/examples/jsm/controls/MapControls.js';
declare module '../../../lib/3/three' {
    interface Three {
        MapControls: typeof MapControls;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mapControls: MapControlsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        mapControls: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        mapControls: string[];
    }
}
export type MapControlsProps = Node<MapControls, typeof MapControls, {
    object: Camera;
    domElement?: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        mapControls: Partial<{
            object: Camera;
            domElement?: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=MapControls.d.ts.map