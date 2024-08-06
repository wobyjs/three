import { Object3DNode } from '../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
export { Camera } from 'three/src/cameras/Camera.js';
import '../core/Object3D';
declare module '../../lib/3/three' {
    interface Three {
        Camera: typeof Camera;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            camera: CameraProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        camera: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        camera: string[];
    }
}
export type CameraProps = Object3DNode<Camera, typeof Camera, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        camera: {};
    }
}
//# sourceMappingURL=Camera.d.ts.map