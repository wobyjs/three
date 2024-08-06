import { Object3DNode } from '../../three-types';
import { Object3D } from 'three/src/core/Object3D.js';
export { Object3D } from 'three/src/core/Object3D.js';
declare module '../../lib/3/three' {
    interface Three {
        Object3D: typeof Object3D;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            object3d: Object3DProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        object3d: string[];
        object3dEventMap: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        object3d: string[];
        object3dEventMap: string[];
    }
}
export type Object3DProps = Object3DNode<Object3D, typeof Object3D, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        object3D: Partial<{}>;
    }
}
//# sourceMappingURL=Object3D.d.ts.map