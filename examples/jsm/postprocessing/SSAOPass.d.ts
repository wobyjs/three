import { Node } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
export * from 'three/examples/jsm/postprocessing/SSAOPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        SSAOPass: typeof SSAOPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ssaoPass: SSAOPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ssaoPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ssaoPass: string[];
    }
}
export type SSAOPassProps = Node<SSAOPass, typeof SSAOPass, {
    scene: Scene;
    camera: Camera;
    width?: number;
    height?: number;
    kernelSize?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        sSAOPass: Partial<{
            scene: Scene;
            camera: Camera;
            width?: number;
            height?: number;
            kernelSize?: number;
        }>;
    }
}
//# sourceMappingURL=SSAOPass.d.ts.map