import { Object3DNode } from '../../three-types';
import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera.js';
export { OrthographicCamera } from 'three/src/cameras/OrthographicCamera.js';
import './Camera';
declare module '../../lib/3/three' {
    interface Three {
        OrthographicCamera: typeof OrthographicCamera;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            orthographicCamera: OrthographicCameraProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        orthographicCamera: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        orthographicCamera: string[];
    }
}
export type OrthographicCameraProps = Object3DNode<OrthographicCamera, typeof OrthographicCamera, {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    near?: number;
    far?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        orthographicCamera: {
            left?: number;
            right?: number;
            top?: number;
            bottom?: number;
            near?: number;
            far?: number;
        };
    }
}
//# sourceMappingURL=OrthographicCamera.d.ts.map