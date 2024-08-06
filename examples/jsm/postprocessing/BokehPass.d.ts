import { BokehPassParamters, BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
export * from 'three/examples/jsm/postprocessing/BokehPass.js';
import { Node } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
declare module '../../../lib/3/three' {
    interface Three {
        BokehPass: typeof BokehPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bokehPass: BokehPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        bokehPass: string[];
        bokehPassParamters: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        bokehPass: string[];
        bokehPassParamters: string[];
    }
}
export type BokehPassProps = Node<BokehPass, typeof BokehPass, {
    scene: Scene;
    camera: Camera;
    params: BokehPassParamters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        bokehPass: Partial<{
            scene: Scene;
            camera: Camera;
            params: BokehPassParamters;
        }>;
    }
}
//# sourceMappingURL=BokehPass.d.ts.map