import { Node } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js';
export * from 'three/examples/jsm/postprocessing/TAARenderPass.js';
import './SSAARenderPass';
declare module '../../../lib/3/three' {
    interface Three {
        TAARenderPass: typeof TAARenderPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            taaRenderPass: TAARenderPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        taaRenderPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        taaRenderPass: string[];
    }
}
export type TAARenderPassProps = Node<TAARenderPass, typeof TAARenderPass, {
    scene: Scene;
    camera: Camera;
    clearColor?: ColorRepresentation;
    clearAlpha?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        taaRenderPass: Partial<{
            scene: Scene;
            camera: Camera;
            clearColor?: ColorRepresentation;
            clearAlpha?: number;
        }>;
    }
}
//# sourceMappingURL=TAARenderPass.d.ts.map