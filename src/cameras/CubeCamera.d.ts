import { Object3DNode } from '../../three-types';
import { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js';
import { CubeCamera } from 'three/src/cameras/CubeCamera.js';
export { CubeCamera } from 'three/src/cameras/CubeCamera.js';
declare module '../../lib/3/three' {
    interface Three {
        CubeCamera: typeof CubeCamera;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeCamera: CubeCameraProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        cubeCamera: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        cubeCamera: string[];
    }
}
export type CubeCameraProps = Object3DNode<CubeCamera, typeof CubeCamera, {
    near: number;
    far: number;
    renderTarget: WebGLCubeRenderTarget;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        cubeCamera: Partial<{
            near: number;
            far: number;
            renderTarget: WebGLCubeRenderTarget;
        }>;
    }
}
//# sourceMappingURL=CubeCamera.d.ts.map