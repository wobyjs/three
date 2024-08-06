import { Node } from '../../../three-types';
import { Projector } from 'three/examples/jsm/renderers/Projector.js';
export * from 'three/examples/jsm/renderers/Projector.js';
declare module '../../../lib/3/three' {
    interface Three {
        Projector: typeof Projector;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            projector: ProjectorProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        projector: string[];
        renderableObject: string[];
        renderableFace: string[];
        renderableVertex: string[];
        renderableLine: string[];
        renderableSprite: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        projector: string[];
        renderableObject: string[];
        renderableFace: string[];
        renderableVertex: string[];
        renderableLine: string[];
        renderableSprite: string[];
    }
}
export type ProjectorProps = Node<Projector, typeof Projector, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        projector: {};
    }
}
//# sourceMappingURL=Projector.d.ts.map