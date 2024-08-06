import { Node } from '../../../three-types';
import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera.js';
export * from 'three/examples/jsm/cameras/CinematicCamera.js';
declare module '../../../lib/3/three' {
    interface Three {
        CinematicCamera: typeof CinematicCamera;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cinematicCamera: CinematicCameraProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        cinematicCamera: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        cinematicCamera: string[];
    }
}
export type CinematicCameraProps = Node<CinematicCamera, typeof CinematicCamera, {
    fov: number;
    aspect: number;
    near: number;
    far: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cinematicCamera: Partial<{
            fov: number;
            aspect: number;
            near: number;
            far: number;
        }>;
    }
}
//# sourceMappingURL=CinematicCamera.d.ts.map