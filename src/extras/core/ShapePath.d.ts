import { Object3DNode } from '../../../three-types';
import { ShapePath } from 'three/src/extras/core/ShapePath.js';
export { ShapePath } from 'three/src/extras/core/ShapePath.js';
declare module '../../../lib/3/three' {
    interface Three {
        ShapePath: typeof ShapePath;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shapePath: ShapePathProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        shapePath: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        shapePath: string[];
    }
}
export type ShapePathProps = Object3DNode<ShapePath, typeof ShapePath, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        shapePath: {};
    }
}
//# sourceMappingURL=ShapePath.d.ts.map