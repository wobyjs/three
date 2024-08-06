import { Object3DNode } from '../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { CameraHelper } from 'three/src/helpers/CameraHelper.js';
export { CameraHelper } from 'three/src/helpers/CameraHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        CameraHelper: typeof CameraHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cameraHelper: CameraHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        cameraHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        cameraHelper: string[];
    }
}
export type CameraHelperProps = Object3DNode<CameraHelper, typeof CameraHelper, {
    camera: Camera;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        cameraHelper: Partial<{
            camera: Camera;
        }>;
    }
}
//# sourceMappingURL=CameraHelper.d.ts.map