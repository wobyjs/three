import { Scene } from 'three/src/scenes/Scene.js';
import { Node } from '../../../three-types';
import PassNode, { PassNodeScope } from 'three/src/nodes/display/PassNode.js';
import { Camera } from 'three/src/cameras/Camera.js';
export * from 'three/src/cameras/Camera.js';
declare module '../../../lib/3/three' {
    interface Three {
        PassNode: typeof PassNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            passNode: PassNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        passNode: string[];
        passTextureNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        passNode: string[];
        passTextureNode: string[];
    }
}
export type PassNodeProps = Node<PassNode, typeof PassNode, {
    scope: PassNodeScope;
    scene: Scene;
    camera: Camera;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        passNode: Partial<{
            scope: PassNodeScope;
            scene: Scene;
            camera: Camera;
        }>;
    }
}
//# sourceMappingURL=PassNode.d.ts.map