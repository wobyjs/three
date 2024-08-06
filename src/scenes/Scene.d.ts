import { Node } from '../../three-types';
import { Scene } from 'three/src/scenes/Scene.js';
export { Scene } from 'three/src/scenes/Scene.js';
import '../core/Object3D';
declare module '../../lib/3/three' {
    interface Three {
        Scene: typeof Scene;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            scene: SceneProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        scene: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        scene: string[];
    }
}
export type SceneProps = Node<Scene, typeof Scene, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        scene: {};
    }
}
//# sourceMappingURL=Scene.d.ts.map