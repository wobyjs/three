import { Object3D } from 'three/src/core/Object3D.js';
import { type Object3DNode } from '../../../three-types';
import Object3DNode_ from 'three/src/nodes/accessors/Object3DNode.js';
declare module '../../../lib/3/three' {
    interface Three {
        Object3DNode: typeof Object3DNode_;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            object3dNode: Object3DNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        object3dNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        object3dNode: string[];
    }
}
export type Object3DNodeProps = Object3DNode<Object3DNode_, typeof Object3DNode_, {
    scope?: string;
    object3d?: Object3D | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        object3DNode: {
            scope?: string;
            object3d?: Object3D | null;
        };
    }
}
//# sourceMappingURL=Object3DNode.d.ts.map