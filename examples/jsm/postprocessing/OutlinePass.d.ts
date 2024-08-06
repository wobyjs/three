import { Node, Vector2 } from '../../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
export * from 'three/examples/jsm/postprocessing/OutlinePass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        OutlinePass: typeof OutlinePass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outlinePass: OutlinePassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        outlinePass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        outlinePass: string[];
    }
}
export type OutlinePassProps = Node<OutlinePass, typeof OutlinePass, {
    resolution: Vector2;
    scene: Scene;
    camera: Camera;
    selectedObjects?: Object3D[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        outlinePass: Partial<{
            resolution: Vector2;
            scene: Scene;
            camera: Camera;
            selectedObjects?: Object3D[];
        }>;
    }
}
//# sourceMappingURL=OutlinePass.d.ts.map