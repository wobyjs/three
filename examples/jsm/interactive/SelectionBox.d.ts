import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { Scene } from 'three/src/scenes/Scene.js';
import { SelectionBox } from 'three/examples/jsm/interactive/SelectionBox.js';
export * from 'three/examples/jsm/interactive/SelectionBox.js';
declare module '../../../lib/3/three' {
    interface Three {
        SelectionBox: typeof SelectionBox;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            selectionBox: SelectionBoxProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        selectionBox: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        selectionBox: string[];
    }
}
export type SelectionBoxProps = Node<SelectionBox, typeof SelectionBox, {
    camera: Camera;
    scene: Scene;
    deep?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        selectionBox: Partial<{
            camera: Camera;
            scene: Scene;
            deep?: number;
        }>;
    }
}
//# sourceMappingURL=SelectionBox.d.ts.map