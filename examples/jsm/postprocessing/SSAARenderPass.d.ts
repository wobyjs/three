import { Node } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass.js';
export * from 'three/examples/jsm/postprocessing/SSAARenderPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        SSAARenderPass: typeof SSAARenderPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ssaaRenderPass: SSAARenderPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ssaaRenderPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ssaaRenderPass: string[];
    }
}
export type SSAARenderPassProps = Node<SSAARenderPass, typeof SSAARenderPass, {
    scene: Scene;
    camera: Camera;
    clearColor?: ColorRepresentation;
    clearAlpha?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        ssaaRenderPass: Partial<{
            scene: Scene;
            camera: Camera;
            clearColor?: ColorRepresentation;
            clearAlpha?: number;
        }>;
    }
}
//# sourceMappingURL=SSAARenderPass.d.ts.map