import { Object3DNode } from '../../three-types';
import { StereoCamera } from 'three/src/cameras/StereoCamera.js';
export { StereoCamera } from 'three/src/cameras/StereoCamera.js';
import './Camera';
declare module '../../lib/3/three' {
    interface Three {
        StereoCamera: typeof StereoCamera;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stereoCamera: StereoCameraProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        stereoCamera: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        stereoCamera: string[];
    }
}
export type StereoCameraProps = Object3DNode<StereoCamera, typeof StereoCamera, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        stereoCamera: {};
    }
}
//# sourceMappingURL=StereoCamera.d.ts.map