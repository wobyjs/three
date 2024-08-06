import { Node, Color } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { Material } from 'three/src/materials/Material.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
export * from 'three/examples/jsm/postprocessing/RenderPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        RenderPass: typeof RenderPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderPass: RenderPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        renderPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        renderPass: string[];
    }
}
export type RenderPassProps = Node<RenderPass, typeof RenderPass, {
    scene: Scene;
    camera: Camera;
    overrideMaterial?: Material | null;
    clearColor?: Color | null;
    clearAlpha?: number | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        renderPass: Partial<{
            scene: Scene;
            camera: Camera;
            overrideMaterial?: Material | null;
            clearColor?: Color | null;
            clearAlpha?: number | null;
        }>;
    }
}
//# sourceMappingURL=RenderPass.d.ts.map