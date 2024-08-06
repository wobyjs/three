import { Object3DNode } from '../../three-types';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import { ArrayCamera } from 'three/src/cameras/ArrayCamera.js';
export { ArrayCamera } from 'three/src/cameras/ArrayCamera.js';
declare module '../../lib/3/three' {
    interface Three {
        ArrayCamera: typeof ArrayCamera;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arrayCamera: ArrayCameraProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        arrayCamera: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        arrayCamera: string[];
    }
}
export type ArrayCameraProps = Object3DNode<ArrayCamera, typeof ArrayCamera, {
    cameras?: PerspectiveCamera[];
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        arrayCamera: {
            cameras?: PerspectiveCamera[];
        };
    }
}
//# sourceMappingURL=ArrayCamera.d.ts.map