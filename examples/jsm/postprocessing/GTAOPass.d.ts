import { Node } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { DepthTexture } from 'three/src/textures/DepthTexture.js';
import { Texture } from 'three/src/textures/Texture.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
export * from 'three/examples/jsm/postprocessing/GTAOPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        GTAOPass: typeof GTAOPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gtaoPass: GTAOPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gtaoPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gtaoPass: string[];
    }
}
export type GTAOPassProps = Node<GTAOPass, typeof GTAOPass, {
    scene: Scene;
    camera: Camera;
    width?: number | undefined;
    height?: number | undefined;
    parameters?: {
        depthTexture?: DepthTexture | undefined;
        normalTexture?: Texture | undefined;
    } | undefined;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gtaoPass: Partial<{
            scene: Scene;
            camera: Camera;
            width?: number | undefined;
            height?: number | undefined;
            parameters?: {
                depthTexture?: DepthTexture | undefined;
                normalTexture?: Texture | undefined;
            };
        }>;
    }
}
//# sourceMappingURL=GTAOPass.d.ts.map