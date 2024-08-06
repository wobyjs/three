import { RenderPixelatedPassParameters, RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js';
export * from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js';
import { Node, WrapAsString } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import '../../../lib/three/extensions';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        RenderPixelatedPass: typeof RenderPixelatedPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderPixelatedPass: RenderPixelatedPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        renderPixelatedPass: string[];
        renderPixelatedPassParameters: WrapAsString<RenderPixelatedPassParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        renderPixelatedPass: string[];
        renderPixelatedPassParameters: string[];
    }
}
export type RenderPixelatedPassProps = Node<RenderPixelatedPass, typeof RenderPixelatedPass, {
    pixelSize: number;
    scene: Scene;
    camera: Camera;
    options?: RenderPixelatedPassParameters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        renderPixelatedPass: Partial<{
            pixelSize: number;
            scene: Scene;
            camera: Camera;
            options?: RenderPixelatedPassParameters;
        }>;
    }
}
//# sourceMappingURL=RenderPixelatedPass.d.ts.map