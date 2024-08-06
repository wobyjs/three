import { Object3DNode } from '../../three-types';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
export { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import './Camera';
declare module '../../lib/3/three' {
    interface Three {
        PerspectiveCamera: typeof PerspectiveCamera;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            perspectiveCamera: PerspectiveCameraProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        perspectiveCamera: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        perspectiveCamera: string[];
    }
}
export type PerspectiveCameraProps = Object3DNode<PerspectiveCamera, typeof PerspectiveCamera, {
    fov?: number;
    aspect?: number;
    near?: number;
    far?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        perspectiveCamera: {
            fov?: number;
            aspect?: number;
            near?: number;
            far?: number;
        };
    }
}
//# sourceMappingURL=PerspectiveCamera.d.ts.map