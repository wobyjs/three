import { Node } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
export * from 'three/examples/jsm/postprocessing/MaskPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        MaskPass: typeof MaskPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            maskPass: MaskPassProps;
            clearMaskPass: ClearMaskPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        maskPass: string[];
        clearMaskPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        maskPass: string[];
        clearMaskPass: string[];
    }
}
export type MaskPassProps = Node<MaskPass, typeof MaskPass, {
    scene: Scene;
    camera: Camera;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        maskPass: Partial<{
            scene: Scene;
            camera: Camera;
        }>;
    }
}
export type ClearMaskPassProps = Node<ClearMaskPass, typeof ClearMaskPass, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        clearMaskPass: Partial<{}>;
    }
}
//# sourceMappingURL=MaskPass.d.ts.map