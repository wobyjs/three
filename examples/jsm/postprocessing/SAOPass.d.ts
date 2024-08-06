import { Node, Vector2 } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass.js';
export * from 'three/examples/jsm/postprocessing/SAOPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        SAOPass: typeof SAOPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            saoPass: SAOPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        saoPass: string[];
        saoPassParams: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        saoPass: string[];
        saoPassParams: string[];
    }
}
export type SAOPassProps = Node<SAOPass, typeof SAOPass, {
    scene: Scene;
    camera: Camera;
    resolution?: Vector2;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        saoPass: Partial<{
            scene: Scene;
            camera: Camera;
            resolution?: Vector2;
        }>;
    }
}
//# sourceMappingURL=SAOPass.d.ts.map