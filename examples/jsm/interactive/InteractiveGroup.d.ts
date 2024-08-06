import { Node } from '../../../three-types';
import { InteractiveGroup } from 'three/examples/jsm/interactive/InteractiveGroup.js';
export * from 'three/examples/jsm/interactive/InteractiveGroup.js';
declare module '../../../lib/3/three' {
    interface Three {
        InteractiveGroup: typeof InteractiveGroup;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            interactiveGroup: InteractiveGroupProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        interactiveGroup: string[];
        interactiveObject3dEventMap: string[];
        interactiveObject3d: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        interactiveGroup: string[];
        interactiveObject3dEventMap: string[];
        interactiveObject3d: string[];
    }
}
export type InteractiveGroupProps = Node<InteractiveGroup, typeof InteractiveGroup, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        interactiveGroup: {};
    }
}
//# sourceMappingURL=InteractiveGroup.d.ts.map